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
                {playerNumber: 1, name: 'player 1'},
                {playerNumber: 2, name: 'player 2'}
            ]
        });
    },

    newGame({boardSize, boardShape, players}) {
        const width = sizes[boardShape][boardSize] || 10;

        const game = Game.create({
            id: guid(),
            players: players,
            currentPlayer: 0,
            board: this.emptyGrid({width})
        });

        this.postProcessBoard(game, boardShape);

        return game;
    },

    postProcessBoard(game, shape) {
        if (shape === 'square') {
            this.fillBoard(game.get('board'), 'forest');
        }

        if (shape === 'hexagon') {
            this.fillHexBoard(game.get('board'), 'forest');
        }

        if (shape === 'random') {
            this.fillRandomBoard(game.get('board'));
            this.eliminateIsolatedIslands(game);
            this.eliminateIsolatedEmptyZones(game);
        }
    },

    fillBoard(board, type) {
        board.forEach(row => {
            row.forEach(hex => hex.set('type', type));
        });
    },

    fillHexBoard(board, type) {
        const width = board[0].length;
        const size = (width + 1) / 2;
        const midPoint = Math.floor(width / 2);

        const middle = board[midPoint][midPoint].get('coord');

        board.forEach(row => {
            row.forEach(hex => {
                if (middle.distanceFrom(hex.get('coord')) < size) {
                    hex.set('type', type);
                }
            });
        });
    },

    fillRandomBoard(board) {
        const width = board[0].length;
        const midPoint = Math.floor(width / 2);
        const breakOverThreshold = midPoint * 0.75;

        const middle = board[midPoint][midPoint].get('coord');
        const max = middle.distanceFrom(board[0][0].get('coord'));

        board.forEach(row => {
            row.forEach(hex => {
                hex.set('type', 'forest');

                const distance = middle.distanceFrom(hex.get('coord'));

                if (distance > breakOverThreshold) {
                    const breakOverWeight = (distance - breakOverThreshold) / (max - breakOverThreshold);

                    if (Math.random() < breakOverWeight) {
                        hex.set('type', 'empty');
                    }
                }
            });
        });
    },

    emptyGrid({width, height = width, type = 'empty'}) { // jshint ignore:line
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
    }
});
