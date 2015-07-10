import Ember from 'ember';

export default Ember.Component.extend({
    classNames: ['player-display'],

    game: null,
    players: Ember.computed.alias('game.players')
});
