import Ember from 'ember';
const { Component, computed } = Ember;

export default Component.extend({
    classNameBindings: [':flyout-panel', 'order'],
    expanded: false,
    buttonOnRight: false,

    order: computed('buttonOnRight', function () {
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
