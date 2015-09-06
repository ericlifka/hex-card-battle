import Ember from 'ember';
const { Component, computed } = Ember;

export default Component.extend({
    classNames: ['card-market'],

    game: null,
    cards: computed.alias('game.cardMarketCards')
});
