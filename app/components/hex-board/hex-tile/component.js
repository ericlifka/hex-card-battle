import Ember from 'ember';
const { Component, computed, inject } = Ember;

export default Component.extend({
    classNameBindings: [':hex-tile', 'hex.type', 'hex.state'],

    debug: inject.service(),

    game: null,
    hex: null,

    chrip: Ember.observer('hex', function() {
      console.log('hex-tile lives!');
    }).on('init'),

    hasResource: computed('hex.type', function () {
        const type = this.get('hex.type');

        return type === 'resource-primary' || type === 'resource-secondary';
    }),

    click() {
        if (this.get('hex.type') !== 'empty') {
            this.get('game').clickHex(this.get('hex'));
        }
    }
});
