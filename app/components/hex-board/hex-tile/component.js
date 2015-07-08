import Ember from 'ember';

export default Ember.Component.extend({
    debug: Ember.inject.service(),

    classNameBindings: [':hex-tile', 'hex.type', 'hex.state'],

    game: null,
    hex: null,

    click() {
        if (this.get('hex.type') !== 'empty') {
            this.get('game').clickHex(this.get('hex'));
        }
    }
});
