import Ember from 'ember';
const { inject, Route } = Ember;

const GameRoute = Route.extend({
    store: inject.service(),

    model(params) {
        return this.get('store').lookupById(params.game_id);
    }
});

export default GameRoute;
