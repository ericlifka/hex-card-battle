import Ember from 'ember';

const GameRoute = Ember.Route.extend({
    store: Ember.inject.service(),

    model(params) {
        return this.get('store').newSquareBoard(params.game_id);
    }
});

export default GameRoute;
