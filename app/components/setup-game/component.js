import Ember from 'ember';

export default Ember.Component.extend({
    classNames: ['setup-game-component'],

    playerCountOptions: [2, 3, 4],
    playerCount: 2,

    boardSizeOptions: ['small', 'medium', 'large'],
    boardSize: 'small'
});
