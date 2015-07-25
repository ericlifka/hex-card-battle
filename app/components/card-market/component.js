import Ember from 'ember';

export default Ember.Component.extend({
    classNameBindings: [':card-market', 'expandedClass'],

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
