import GameModel from './model-base';

export default GameModel.extend({
    grid: null,

    lookupHex({ x, y, z }) {
        const col = x + (z + (z & 1)) / 2;
        const row = z;
        const grid = this.get('grid');

        if (grid && grid.hasOwnProperty(row)) {
            return grid[row][col];
        }

        return null;
    }
});
