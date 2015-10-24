import Ember from 'ember';
const { Component, computed } = Ember;

export default Component.extend({
    classNameBindings: [
        ':turn-change-display'
    ],

    game: null,

    phase: computed.alias('game.phase'),
    gamePhase: computed.alias('phase.gamePhase'),
    activePlayer: computed.alias('phase.activePlayer'),
    turn: computed.alias('phase.turn'),

    isGameStart: computed.equal('gamePhase', 'gameStart'),
    isTurnStart: computed.equal('gamePhase', 'turnStart')
});
