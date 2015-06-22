import Ember from 'ember';

const GameRoute = Ember.Route.extend({
    store: Ember.inject.service(),

    model(params) {
        return this.get('store').newGame(params.game_id, 16);
    }
});

export default GameRoute;
