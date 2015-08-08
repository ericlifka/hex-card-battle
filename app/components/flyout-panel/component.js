import Ember from 'ember';

export default Ember.Component.extend({
    classNames: ['flyout-panel'],
    expanded: false,

    actions: {
        toggleExpanded() {
            this.toggleProperty('expanded');
        }
    }
});
