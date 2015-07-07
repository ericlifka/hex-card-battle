import Ember from 'ember';

const GameRoute = Ember.Route.extend({
    store: Ember.inject.service(),

    model(params) {
        return this.get('store').lookupById(params.game_id);
    }
});

export default GameRoute;
