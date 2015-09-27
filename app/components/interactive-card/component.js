import Ember from 'ember';
const { Component, computed } = Ember;

export default Component.extend({
    classNames: [ 'interactive-card' ],

    card: null,

    name: computed.alias('card.name'),
    art: computed.alias('card.art'),
    abilities: computed.alias('card.abilities')
});
