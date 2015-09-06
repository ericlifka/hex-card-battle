import Ember from 'ember';
const { Component, computed } = Ember;

import Player from '../../models/player';

export default Component.extend({
    classNames: ['setup-game-component'],

    boardSize: 'medium',
    boardSizeOptions: ['small', 'medium', 'large'],

    boardShape: 'random',
    boardShapeOptions: ['hexagon', 'square', 'random'],

    playerCount: 2,
    playerCountOptions: [2, 3, 4],

    players: computed('playerCount', function () {
        const playerCount = this.get('playerCount');
        const players = [];

        for (let playerNumber = 1; playerNumber <= playerCount; playerNumber++) {
            players.push(this.playerDescription(playerNumber));
        }

        return players;
    }),

    actions: {
        createGame() {
            this.sendAction('action', this.getProperties('boardSize', 'boardShape', 'players'));
        }
    },

    playerDescription(number) {
        if (!this._playerCache) {
            this._playerCache = {};
        }

        if (!this._playerCache.hasOwnProperty(number)) {
            this._playerCache[number] = Player.create({
                number,
                name: `player ${number}`
            });
        }

        return this._playerCache[number];
    }
});
