import Ember from 'ember';

import Game from '../models/game';
import CubeCoord from '../models/cube-coord';
import guid from '../utils/guid';

const sizes = {
    small: 10,
    medium: 20,
    large: 40
};

export default Ember.Service.extend({
    lookupById(id) {
        return this.newGame({
            id,
            boardSize: 'small',
            boardShape: 'square',
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
        const width = sizes[boardSize];

        return this.emptyGrid({width, type: 'lake'});
    },

    generateHexagonBoard(boardSize) {
        throw "hexagon board not supported yet";
    },

    generateRandomBoard(boardSize) {
        throw "random board not supported yet";
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
