import Ember from 'ember';

export default Ember.Component.extend({
    classNameBindings: [':card-market', 'expandedClass'],

    game: null,
    cards: Ember.computed.alias('game.cardMarketCards'),

    expanded: false,

    expandedClass: Ember.computed('expanded', function () {
        return this.get('expanded') ? 'expanded' : '';
    }),

    actions: {
        togglePanelState() {
            this.toggleProperty('expanded');
        }
    }
});
