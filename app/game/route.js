import Ember from 'ember';

const GameRoute = Ember.Route.extend({
    model(params) {
        return {
            id: params.game_id,
            board: {
                rows: [
                    [{type: 'normal'},{type: 'normal'},{type: 'normal'}],
                    [{type: 'normal'},{type: 'normal'},{type: 'normal'}],
                    [{type: 'normal'},{type: 'normal'},{type: 'normal'}]
                ]
            }
        };
    }
});

export default GameRoute;
