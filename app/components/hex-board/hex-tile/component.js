import Ember from 'ember';

export default Ember.Component.extend({
    classNameBindings: ['hex.type', 'active:active'],

    hex: null,
    active: false,

    click() {
        this.toggleProperty('active');
    }
});
