import Ember from 'ember';

export default Ember.Component.extend({
    classNames: ['game-board'],

    actions: {
        zoomIn() {
            console.log('zoom-in');
        },
        zoomOut() {
            console.log('zoom-out');
        }
    }
});
