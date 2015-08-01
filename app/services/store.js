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

    newGame({boardSize, boardShape, players, id}) {
        const width = sizes[boardShape][boardSize] || 10;
        const currentPlayer = 0;
        const board = BoardGenerator.generate(width, boardShape);
        id = id || guid();

        return Game.create({id, players, currentPlayer, board});
    }
});
