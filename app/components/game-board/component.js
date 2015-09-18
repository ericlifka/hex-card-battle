import Ember from 'ember';
const { Component } = Ember;

export default Component.extend({
    classNames: ['game-board'],

    actions: {
        startGame() {
            console.log('start game');
        }
    }
});
