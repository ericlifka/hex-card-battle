import Ember from 'ember';
const { inject, Route } = Ember;

export default Route.extend({
    store: inject.service(),

    actions: {
        createGame(description) {
            this.transitionTo('game',
                this.get('store').newGame(description));
        }
    }
});
