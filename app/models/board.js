import Ember from 'ember';

export default Ember.Object.extend({
    rows: null,

    lookupHex(x, y, z) {
        const col = x + (z + (z&1)) / 2;
        const row = z;
        const rows = this.get('rows');

        if (rows.hasOwnProperty(row)) {
            return rows[row][col];
        }

        return null;
    }
});
