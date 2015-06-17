import Ember from 'ember';

export default Ember.Component.extend({
    classNameBindings: [':hex-tile', 'hex.type', 'active:active'],

    game: null,
    hex: null,
    active: false,

    click() {
        this.toggleProperty('active');
    }
});
