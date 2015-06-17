import Ember from 'ember';

export default Ember.Object.extend({
    id: null,
    board: null,

    clickHex(hex) {
        hex.toggleProperty('active');
    },

    lookupHex(x, y, z) {
        const col = x + (z + (z&1)) / 2;
        const row = z;
        const board = this.get('board');

        if (board.hasOwnProperty(row)) {
            return board[row][col];
        }

        return null;
    }
});
