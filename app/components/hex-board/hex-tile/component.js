import Ember from 'ember';

export default Ember.Component.extend({
    debug: Ember.inject.service(),

    classNameBindings: [':hex-tile', 'hex.type', 'hex.state'],

    game: null,
    hex: null,

    hasResource: Ember.computed('hex.type', function () {
        const type = this.get('hex.type');

        return type === 'resource-primary' || type === 'resource-secondary';
    }),

    click() {
        if (this.get('hex.type') !== 'empty') {
            this.get('game').clickHex(this.get('hex'));
        }
    }
});
