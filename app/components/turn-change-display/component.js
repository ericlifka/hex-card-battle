import Ember from 'ember';
const { Component, computed } = Ember;

export default Component.extend({
    classNameBindings: [
        ':turn-change-display',
        'visible::hidden'
    ],

    game: null,
    phase: computed.alias('game.phase'),

    isGameStart: computed.equal('phase.gamePhase', 'start'),
    visible: computed.or('isGameStart'),

    actions: {
        startGame() {

        }
    }
});
