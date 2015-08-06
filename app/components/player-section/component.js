import Ember from 'ember';

export default Ember.Component.extend({
    classNameBindings: [':player-section', 'expandedClass'],

    game: null,

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
