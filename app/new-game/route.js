import Ember from 'ember';

export default Ember.Route.extend({
    actions: {
        createGame(description) {
            console.log('route - createGame', description);
        }
    }
});
