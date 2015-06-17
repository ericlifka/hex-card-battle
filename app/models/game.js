import Ember from 'ember';

export default Ember.Object.extend({
    id: null,
    board: null,

    clickHex(hex) {
        hex.toggleProperty('active');
    }
});
