import Ember from 'ember';

export default Ember.Route.extend({
    store: Ember.inject.service(),

    actions: {
        createGame(description) {
            console.log('route - createGame', description);
        }
    }
});
