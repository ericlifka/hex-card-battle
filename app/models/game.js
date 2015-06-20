import Ember from 'ember';

export default Ember.Object.extend({
    id: null,
    board: null,

    activeHex: null,

    clickHex(hex) {
        const active = this.get('activeHex');
        if (active !== hex) {
            this.deactivateHex(active);
            this.activateHex(hex);
            this.set('activeHex', hex);
        } else {
            this.deactivateHex(hex);
            this.set('activeHex', null);
        }
    },

    activateHex(hex) {
        if (hex) {
            hex.set('state', 'active');
            hex.coord.adjacentCoords().forEach(coord => {
                const adjacentHex = this.lookupHex(coord);
                if (adjacentHex) {
                    adjacentHex.set('state', 'secondary');
                }
            });
        }
    },

    deactivateHex(hex) {
        if (hex) {
            hex.set('state', null);
            hex.coord.adjacentCoords().forEach(coord => {
                const adjacentHex = this.lookupHex(coord);
                if (adjacentHex) {
                    adjacentHex.set('state', null);
                }
            });
        }
    },

    lookupHex({x, y, z}) {
        const col = x + (z + (z & 1)) / 2;
        const row = z;
        const board = this.get('board');

        if (board.hasOwnProperty(row)) {
            return board[row][col];
        }

        return null;
    }
});
