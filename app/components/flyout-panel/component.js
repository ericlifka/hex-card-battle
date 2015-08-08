import Ember from 'ember';

export default Ember.Component.extend({
    classNameBindings: [':flyout-panel', 'order'],
    expanded: false,
    buttonOnRight: false,

    order: Ember.computed('buttonOnRight', function () {
        return this.get('buttonOnRight') ?
            'button-right' :
            'button-left';
    }),

    actions: {
        toggleExpanded() {
            this.toggleProperty('expanded');
        }
    }
});
