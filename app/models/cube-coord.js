import Ember from 'ember';

const CubeCoord = Ember.Object.extend({
    x: 0,
    y: 0,
    z: 0,

    adjacentCoords() {
        const x = this.get('x');
        const y = this.get('y');
        const z = this.get('z');

        return [
            CubeCoord.fromCube(x-1, y+1, z),
            CubeCoord.fromCube(x+1, y-1, z),
            CubeCoord.fromCube(x, y-1, z+1),
            CubeCoord.fromCube(x, y+1, z-1),
            CubeCoord.fromCube(x+1, y, z-1),
            CubeCoord.fromCube(x-1, y, z+1)
        ];
    },

    distanceFrom(other) {
        const dx = Math.abs(this.get('x') - other.get('x'));
        const dy = Math.abs(this.get('y') - other.get('y'));
        const dz = Math.abs(this.get('z') - other.get('z'));

        const manhattanDistance = dx + dy + dz;

        return manhattanDistance / 2;
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
