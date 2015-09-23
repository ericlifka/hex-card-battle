import Ember from 'ember';
const { Component, computed } = Ember;

export default Component.extend({
    classNames: ['player-section'],

    game: null,
    player: computed.alias('game.phase.activePlayer'),
    hand: computed.alias('player.hand')
});
