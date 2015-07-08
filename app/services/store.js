import Ember from 'ember';

import Game from '../models/game';
import CubeCoord from '../models/cube-coord';
import guid from '../utils/guid';

const sizes = {
    square: {
        small: 10,
        medium: 20,
        large: 40
    },
    hexagon: {
        small: 6,
        medium: 12,
        large: 24
    }
};

export default Ember.Service.extend({
    lookupById(id) {
        return this.newGame({
            id,
            boardSize: 'medium',
            boardShape: 'random',
            players: [
                {playerNumber: 1, name: 'player 1'},
                {playerNumber: 2, name: 'player 2'}
            ]
        });
    },

    newGame({boardSize, boardShape, players}) {
        const game = Game.create({
            id: guid(),
            players: players,
            currentPlayer: 0,
            board: this.generateBoard(boardSize, boardShape)
        });

        if (boardShape === 'random') {
            this.eliminateIsolatedIslands(game);
            this.eliminateIsolatedEmptyZones(game);
        }

        return game;
    },

    generateBoard(size, shape) {
        switch (shape) {
            case 'square':
                return this.generateSquareBoard(size);

            case 'hexagon':
                return this.generateHexagonBoard(size);

            case 'random':
                return this.generateRandomBoard(size);

            default:
                throw `Unsupported board type '${shape}'`;
        }
    },

    generateSquareBoard(boardSize) {
        const width = sizes.square[boardSize];

        return this.emptyGrid({width, type: 'lake'});
    },

    generateHexagonBoard(boardSize) {
        const size = sizes.hexagon[boardSize];
        const width = 2 * size - 1;
        const midPoint = Math.floor(width / 2);

        const grid = this.emptyGrid({width});
        const middle = grid[midPoint][midPoint].get('coord');

        grid.forEach(row => {
            row.forEach(hex => {
                if (middle.distanceFrom(hex.get('coord')) < size) {
                    hex.set('type', 'forest');
                }
            });
        });

        return grid;
    },

    generateRandomBoard(boardSize) {
        const width = sizes.square[boardSize];
        const midPoint = Math.floor(width / 2);
        const breakOverThreshold = midPoint * .75;

        const grid = this.emptyGrid({width, type: 'forest'});
        const middle = grid[midPoint][midPoint].get('coord');
        const max = middle.distanceFrom(grid[0][0].get('coord'));

        grid.forEach(row => {
            row.forEach(hex => {
                const distance = middle.distanceFrom(hex.get('coord'));
                const weightOfMiddle = distance / max;

                if (Math.random() * Math.random() > weightOfMiddle) {
                    hex.set('type', 'lake');
                }

                if (distance > breakOverThreshold) {
                    const breakOverWeight = (distance - breakOverThreshold) / (max - breakOverThreshold);

                    if (Math.random() < breakOverWeight) {
                        hex.set('type', 'empty');
                    }
                }
            });
        });

        return grid;
    },

    emptyGrid({width, height = width, type = 'empty'}) {
        const rows = [];

        for (let h = 0; h < height; h++) {
            const row = [];

            for (let w = 0; w < width; w++) {
                row.push(Ember.Object.create({type}));
            }

            rows.push(row);
        }

        this.setCubeCoords(rows);
        return rows;
    },

    setCubeCoords(rows) {
        for (let row = 0; row < rows.length; row++) {
            for (let col = 0; col < rows[row].length; col++) {
                Ember.set(rows[row][col], 'coord', CubeCoord.fromRowCol(row, col));
            }
        }
    },

    eliminateIsolatedIslands(game) {
        const grid = game.board;
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
        const grid = game.board;
        const queue = [];
        const hexChecker = hex => {
            if (hex.type === 'empty' && !hex.mainempty) {
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
                const neighbor = game.lookupHex(coord);
                if (neighbor && neighbor.type === 'empty' && !neighbor.mainempty) {
                    neighbor.mainempty = true;
                    queue.push(neighbor);
                }
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
    }
});
