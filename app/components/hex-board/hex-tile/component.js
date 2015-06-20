import Ember from 'ember';

export default Ember.Component.extend({
    classNameBindings: [':hex-tile', 'hex.type', 'hex.state'],

    game: null,
    hex: null,

    click() {
        this.get('game').clickHex(this.get('hex'));
    }
});
