import Ember from 'ember';

export default Ember.Service.extend({
    newSquareBoard(id) {
        return Ember.Object.create({
            id,
            board: {
                rows: [
                    [{type: 'normal'},{type: 'normal'},{type: 'normal'}],
                    [{type: 'normal'},{type: 'normal'},{type: 'normal'}],
                    [{type: 'normal'},{type: 'normal'},{type: 'normal'}]
                ]
            }
        });
    }
});
