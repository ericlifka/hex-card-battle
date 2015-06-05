import Ember from 'ember';

const GameRoute = Ember.Route.extend({
    model(params) {
        return {
            id: params.game_id
        };
    }
});

export default GameRoute;
