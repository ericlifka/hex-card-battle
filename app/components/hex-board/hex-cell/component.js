import Ember from 'ember';

export default Ember.Component.extend({
    classNameBindings: ['cell.type', 'active:active'],

    cell: null,
    active: false,

    click() {
        this.toggleProperty('active');
    }
});
