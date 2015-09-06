import Ember from 'ember';
const { Component } = Ember;

export default Component.extend({
    classNameBindings: [
        ':turn-change-display',
        'game.phase.isTurnTransition::hidden'
    ],
    game: null
});
