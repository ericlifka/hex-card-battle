import Ember from 'ember';

export default Ember.Component.extend({
    classNames: ['setup-game-component'],

    playerCounts: [2, 3, 4],

    actions: {
        change() {
            console.log('change');
        }
    }
});
