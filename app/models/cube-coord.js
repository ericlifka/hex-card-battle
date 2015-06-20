import Ember from 'ember';

const CubeCoord = Ember.Object.extend({
    x: 0,
    y: 0,
    z: 0,

    adjacentCoords() {

    }
});

CubeCoord.reopenClass({
    fromRowCol(row, col) {
        const x = col - (row + (row & 1)) / 2;
        const z = row;
        const y = -x - z;

        return CubeCoord.create({x, y, z});
    },

    fromCube(x, y, z) {
        Ember.assert("x + y + z must equal 0", x + y + z === 0);
        return CubeCoord.create({x, y, z});
    }
});

export default CubeCoord;
