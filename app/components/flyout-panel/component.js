import Ember from 'ember';
const { Component, computed } = Ember;

export default Component.extend({
    classNameBindings: [':flyout-panel', 'layoutClasses'],
    expanded: false,
    position: null,

    layoutClasses: computed('position', function () {
        const position = this.get('position');

        if (position === 'top-right') {
            return 'button-on-left title-on-bottom';
        }
        else if (position === 'bottom-left') {
            return 'button-on-right title-on-top';
        }
        else {
            return '';
        }
    }),

    actions: {
        toggleExpanded() {
            this.toggleProperty('expanded');
        }
    }
});
