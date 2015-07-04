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
    newGame({boardSize, boardShape, players}) {
        const id = guid();
        const game = Game.create({id});

        if (boardShape !== 'square') {
            const message = "non square boards not yet supported :p";
            console.error(message);
            throw message;
        }
        game.set('board', this.generateSquareBoard(boardSize));

        return game;
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

    setCubeCoords(rows) {
        for (let row = 0; row < rows.length; row++) {
            for (let col = 0; col < rows[row].length; col++) {
                Ember.set(rows[row][col], 'coord', CubeCoord.fromRowCol(row, col));
            }
        }
    }
});
