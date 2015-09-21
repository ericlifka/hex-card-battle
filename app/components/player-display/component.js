import Ember from 'ember';
const { Component, computed } = Ember;

export default Component.extend({
    classNames: ['player-display'],

    game: null,
    players: computed.alias('game.players'),
    activePlayer: computed.alias('game.phase.activePlayer')
});
