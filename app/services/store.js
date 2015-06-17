import Ember from 'ember';

import Game from '../models/game';

export default Ember.Service.extend({
    newGame(id, size = 10) {
        const game = Game.create({id});

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
        game.set('board', rows);

        this.setCubeCoords(rows);

        return game;
    },

    setCubeCoords(rows) {
        for (let row = 0; row < rows.length; row++) {
            for (let col = 0; col < rows[row].length; col++) {
                const hex = rows[row][col];

                const x = col - (row + (row & 1)) / 2;
                const z = row;
                const y = -x - z;

                hex.setProperties({x, y, z});
            }
        }
    }
});
