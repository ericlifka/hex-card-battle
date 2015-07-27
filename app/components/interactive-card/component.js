import Ember from 'ember';

export default Ember.Component.extend({
    classNames: ['interactive-card'],

    card: null,
    name: Ember.computed.alias('card.name'),
    art: Ember.computed.alias('card.art')
});
