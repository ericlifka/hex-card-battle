import Ember from 'ember';

export default Ember.Component.extend({
    classNameBindings: [
        ':turn-change-display',
        'game.phase.isTurnTransition::hidden'
    ],
    game: null
});
