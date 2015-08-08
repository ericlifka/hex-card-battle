import Ember from 'ember';

export default Ember.Component.extend({
    classNames: ['card-market'],

    game: null,
    cards: Ember.computed.alias('game.cardMarketCards')
});
