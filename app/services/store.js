import Ember from 'ember';

export default Ember.Service.extend({
    newGame(id, size = 10) {
        const game = Ember.Object.create({id});
        const rows = [];

        for (let height = size % 2 === 0 ? size + 1 : size,
                 i = 0; i < height; i++) {

            const row = [];

            for (let width = i % 2 === 0 ? size : size + 1,
                     j = 0; j < width; j++) {

                row.push(Ember.Object.create({
                    type: 'normal'
                }));
            }

            rows.push(row);
        }

        game.set('board', Ember.Object.create({rows}));

        return game;
    }
});
