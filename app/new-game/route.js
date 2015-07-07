import Ember from 'ember';

export default Ember.Route.extend({
    store: Ember.inject.service(),

    actions: {
        createGame(description) {
            this.transitionTo('game',
                this.get('store').newGame(description));
        }
    }
});
