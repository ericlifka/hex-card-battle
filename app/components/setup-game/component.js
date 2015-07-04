import Ember from 'ember';

export default Ember.Component.extend({
    classNames: ['setup-game-component'],

    boardSize: 'small',
    boardSizeOptions: ['small', 'medium', 'large'],

    boardShape: 'square',
    boardShapeOptions: ['hexagon', 'square', 'random'],

    playerCount: 2,
    playerCountOptions: [2, 3, 4],

    players: Ember.computed('playerCount', function () {
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

    playerDescription(playerNumber) {
        if (!this._playerCache) {
            this._playerCache = {};
        }

        if (!this._playerCache.hasOwnProperty(playerNumber)) {
            this._playerCache[playerNumber] = Ember.Object.create({
                playerNumber,
                name: `player ${playerNumber}`
            });
        }

        return this._playerCache[playerNumber];
    }
});
