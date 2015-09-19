import Ember from 'ember';
const { Component } = Ember;

export default Component.extend({
    classNames: ['game-board'],

    game: null,

    actions: {
        startGame() {
            console.log('start game');
            const phase = this.get('game.phase');

            phase.set('gamePhase', 'turnStart');
            phase.set('activePlayerIndex', 0);
            phase.set('activePlayer', this.get('game.players.firstObject'));
        }
    }
});
