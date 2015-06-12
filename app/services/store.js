import Ember from 'ember';

export default Ember.Service.extend({
    newSquareBoard(id, size = 10) {
        const board = Ember.Object.create({id});
        const rows = [];

        for (let i = 0; i < size; i++) {
            const row = [];

            for (let j = 0,
                     cap = i % 2 === 0 ? size : size + 1;
                 j < cap;
                 j++) {

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
