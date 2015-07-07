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
        if (shape !== 'square') {
            const message = "non square boards not yet supported :p";
            console.error(message);
            throw message;
        }

        return this.generateSquareBoard(size);
    },

    generateSquareBoard(boardSize) {
        const size = sizes[boardSize];
        const rows = [];

        for (let height = size % 2 === 0 ? size + 1 : size,
                 i = 0; i < height; i++) {

            const row = [];

            for (let width = i % 2 === 0 ? size : size + 1,
                     j = 0; j < width; j++) {

                row.push(Ember.Object.create({
                    type: 'lake'
                }));
            }

            rows.push(row);
        }

        this.setCubeCoords(rows);
        return rows;
    },

    emptyGrid(width, height) {
        const type = 'empty';
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
