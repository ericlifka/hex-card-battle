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
            boardSize: 'small',
            boardShape: 'random',
            players: [
                {playerNumber: 1, name: 'player 1'},
                {playerNumber: 2, name: 'player 2'}
            ]
        });
    },

    newGame({boardSize, boardShape, players}) {
        return Game.create({
            id: guid(),
            players: players,
            currentPlayer: 0,
            board: this.generateBoard(boardSize, boardShape)
        });
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
        const grid = this.emptyGrid({width});

        grid.forEach(row => {
            row.forEach(hex => {
                hex.set('type', 'forest');
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
    }
});
