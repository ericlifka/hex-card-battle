import Ember from 'ember';

const GameRoute = Ember.Route.extend({
    store: Ember.inject.service(),

    model(params) {
        this.get('store').sayHi();

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
