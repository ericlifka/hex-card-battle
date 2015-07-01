import Ember from 'ember';

export default Ember.Component.extend({
    classNames: ['setup-game-component'],

    playerCountOptions: [2, 3, 4],
    playerCount: 2,

    boardSizeOptions: ['small', 'medium', 'large'],
    boardSize: 'small',

    turnDurationOptions: [
        '1 minute',
        '10 minutes',
        '1 hour',
        '12 hours',
        '1 day'
    ],
    turnDuration: '1 hour'
});
