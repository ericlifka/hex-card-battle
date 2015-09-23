import Ember from 'ember';
const { Component } = Ember;

export default Component.extend({
    classNames: ['game-board'],

    game: null,

    debugGame: Ember.observer('game', function () {
        window.activeGame = this.get('game');
    }).on('init'),

    actions: {
        startGame() {
            const phase = this.get('game.phase');

            phase.set('gamePhase', 'turnStart');
            phase.set('activePlayerIndex', 0);
            phase.set('activePlayer', this.get('game.players.firstObject'));
        },

        startTurn() {
            this.get('game.phase.activePlayer').refillHand();
            this.set('game.phase.gamePhase', 'turnActive');
        }
    }
});
