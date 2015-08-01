import Ember from 'ember';

import Game from '../models/game';
import Player from '../models/player';

import guid from '../utils/guid';
import rand from '../utils/rand';

import BoardGenerator from '../utils/board-generator';

const sizes = {
    square: {
        small: 10,
        medium: 20,
        large: 40
    },
    hexagon: {
        small: 11,
        medium: 23,
        large: 47
    },
    random: {
        small: 10,
        medium: 20,
        large: 40
    }
};

export default Ember.Service.extend({
    lookupById(id) {
        return this.newGame({
            id,
            boardSize: 'medium',
            boardShape: 'random',
            players: [
                Player.create({number: 1, name: 'player 1'}),
                Player.create({number: 2, name: 'player 2'})
            ]
        });
    },

    newGame({boardSize, boardShape, players}) {
        const width = sizes[boardShape][boardSize] || 10;

        const game = Game.create({
            id: guid(),
            players: players,
            currentPlayer: 0,
            board: BoardGenerator.generate(width)
        });

        this.postProcessBoard(game, boardShape);

        return game;
    },

    postProcessBoard(game, shape) {
        if (shape === 'square') {
            this.fillBoard(game.get('board.grid'), 'forest');
        }

        if (shape === 'hexagon') {
            this.fillHexBoard(game.get('board.grid'), 'forest');
        }

        if (shape === 'random') {
            this.fillRandomBoard(game.get('board.grid'));
            this.eliminateIsolatedIslands(game);
            this.eliminateIsolatedEmptyZones(game);
            this.randomizeLake(game);
            this.addPrimaryResourceNodes(game);
            this.addSecondaryResourceNodes(game);
        }
    },

    fillBoard(board, type) {
        board.forEach(row => row.forEach(hex => {
            hex.set('type', type);
        }));
    },

    fillHexBoard(board, type) {
        const width = board[0].length;
        const size = (width + 1) / 2;
        const midPoint = Math.floor(width / 2);

        const middle = board[midPoint][midPoint].get('coord');

        board.forEach(row => row.forEach(hex => {
            if (middle.distanceFrom(hex.get('coord')) < size) {
                hex.set('type', type);
            }
        }));
    },

    fillRandomBoard(board) {
        const width = board[0].length;
        const midPoint = Math.floor(width / 2);
        const breakOverThreshold = midPoint * 0.75;

        const middle = board[midPoint][midPoint].get('coord');
        const max = middle.distanceFrom(board[0][0].get('coord'));

        board.forEach(row => row.forEach(hex => {
            hex.set('type', 'forest');

            const distance = middle.distanceFrom(hex.get('coord'));

            if (distance > breakOverThreshold) {
                const breakOverWeight = (distance - breakOverThreshold) / (max - breakOverThreshold);

                if (Math.random() < breakOverWeight) {
                    hex.set('type', 'empty');
                }
            }
        }));
    },

    eliminateIsolatedIslands(game) {
        const grid = game.board.grid;
        const midPoint = Math.floor(grid.length / 2);
        const middle = grid[midPoint][midPoint];
        const queue = [middle];
        middle.mainland = true;

        while (queue.length > 0) {
            const hex = queue.shift();

            hex.coord.adjacentCoords().forEach(coord => {
                const neighbor = game.lookupHex(coord);
                if (neighbor && neighbor.type !== 'empty' && !neighbor.mainland) {
                    neighbor.mainland = true;
                    queue.push(neighbor);
                }
            });
        }

        grid.forEach(row => {
            row.forEach(hex => {
                if (!hex.mainland) {
                    hex.set('type', 'empty');
                }

                delete hex.mainland;
            });
        });
    },

    eliminateIsolatedEmptyZones(game) {
        const grid = game.board.grid;
        const queue = [];
        const hexChecker = hex => {
            if (hex && hex.type === 'empty' && !hex.mainempty) {
                hex.mainempty = true;
                queue.push(hex);
            }
        };

        grid.get('firstObject').forEach(hexChecker);
        grid.get('lastObject').forEach(hexChecker);
        grid.forEach(row => {
            hexChecker(row.get('firstObject'));
            hexChecker(row.get('lastObject'));
        });

        while (queue.length > 0) {
            const hex = queue.shift();

            hex.coord.adjacentCoords().forEach(coord => {
                hexChecker(game.lookupHex(coord));
            });
        }

        grid.forEach(row => {
            row.forEach(hex => {
                if (!hex.mainempty && hex.type === 'empty') {
                    hex.set('type', 'lake');
                }

                delete hex.mainempty;
            });
        });
    },

    randomizeLake(game) {
        const queue = [];
        const stepDown = this.probabilityStepDown(game);
        const lakeSeed = this.getRandomCentralHex(game);

        lakeSeed.probability = 1;
        queue.push(lakeSeed);

        while (queue.length > 0) {
            const hex = queue.shift();

            if (rand.bool(hex.probability)) {
                hex.set('type', 'lake');
                const propagationProbability = hex.probability - stepDown;

                if (propagationProbability > 0) {
                    hex.coord.adjacentCoords().forEach(coord => {
                        const adjacentHex = game.lookupHex(coord);

                        if (adjacentHex && adjacentHex.type !== 'empty' && !adjacentHex.probability) {
                            adjacentHex.probability = propagationProbability;
                            queue.push(adjacentHex);
                        }
                    });
                }
            }
        }

        game.board.grid.forEach(row => row.forEach(hex => {
            delete hex.probability;
        }));
    },

    getRandomCentralHex({board}) {
        const size = board.grid.length;

        const midPoint = Math.floor(size / 2);
        const range = Math.floor(size / 6);

        const minRange = midPoint - range;
        const maxRange = midPoint + range;

        const xRand = rand.range(minRange, maxRange);
        const yRand = rand.range(minRange, maxRange);

        return board.grid[xRand][yRand];
    },

    probabilityStepDown({board}) {
        const size = board.grid.length;

        if (size >= 40) {
            return 0.05;
        } else if (size >= 20) {
            return 0.1;
        } else {
            return 0.2;
        }
    },

    addPrimaryResourceNodes(game) {
        game.board.grid.forEach(row => row.forEach(hex => {
            const neighbors = this.getNeighbors(hex, game);
            if (hex.type === 'forest' &&
                this.countNeighbors(neighbors, 'forest') <= 1 &&
                this.countNeighbors(neighbors, 'resource-primary') === 0) {

                hex.set('type', 'resource-primary');
            }
        }));
    },

    addSecondaryResourceNodes(game) {
        game.board.grid.forEach(row => row.forEach(hex => {
            const neighbors = this.getNeighbors(hex, game);
            const forest = this.countNeighbors(neighbors, 'forest');
            const primary = this.countNeighbors(neighbors, 'resource-primary');
            const secondary = this.countNeighbors(neighbors, 'resource-secondary');

            if (hex.type === 'forest' && primary === 0 && secondary === 0 && forest <= 2) {
                hex.set('type', 'resource-secondary');
            }
        }));
    },

    getNeighbors(hex, game) {
        return hex.coord.adjacentCoords().map(coord => game.lookupHex(coord));
    },

    countNeighbors(neighbors, type) {
        let count = 0;
        neighbors.forEach(hex => {
            if (hex && hex.get('type') === type) {
                count++;
            }
        });
        return count;
    }
});
