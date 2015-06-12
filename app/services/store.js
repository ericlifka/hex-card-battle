import Ember from 'ember';

export default Ember.Service.extend({
    newSquareBoard(id, size = 10) {
        const board = Ember.Object.create({id});
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

        board.set('board', Ember.Object.create({rows}));

        return board;
    }
});
