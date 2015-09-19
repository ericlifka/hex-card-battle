import Ember from 'ember';
const { Component, computed } = Ember;

export default Component.extend({
    classNameBindings: [
        ':turn-change-display',
        'visible::hidden'
    ],

    game: null,
    gamePhase: computed.alias('game.phase.gamePhase'),

    isGameStart: computed.equal('gamePhase', 'gameStart'),
    isTurnStart: computed.equal('gamePhase', 'turnStart'),
    visible: computed.or('isGameStart', 'isTurnStart')
});
