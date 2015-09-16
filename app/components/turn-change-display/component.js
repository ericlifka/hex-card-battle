import Ember from 'ember';
const { Component, computed } = Ember;

export default Component.extend({
    classNameBindings: [
        ':turn-change-display',
        'visible::hidden'
    ],

    game: null,
    phase: computed.alias('game.phase'),

    visible: computed(function () {
        return false;
    })
});
