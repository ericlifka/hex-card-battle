import Ember from 'ember';

const CubeCoord = Ember.Object.extend({
    x: 0,
    y: 0,
    z: 0
});

CubeCoord.reopenClass({
    fromRowCol(row, col) {
        const x = col - (row + (row & 1)) / 2;
        const z = row;
        const y = -x - z;

        return CubeCoord.create({x, y, z});
    }
});

export default CubeCoord;
