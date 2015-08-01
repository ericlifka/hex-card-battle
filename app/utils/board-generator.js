import Ember from 'ember';

import Board from '../models/board';
import CubeCoord from '../models/cube-coord';

export default Ember.Object.create({
    generate(width) {
        return Board.create({
            grid: this.emptyGrid(width)
        })
    },

    emptyGrid(width) {
        const type = 'empty';
        const grid = [];

        for (let h = 0; h < width; h++) {
            const row = [];

            for (let w = 0; w < width; w++) {
                row.push(Ember.Object.create({type}));
            }

            grid.push(row);
        }

        this.setCubeCoords(grid);
        return grid;
    },

    setCubeCoords(grid) {
        for (let row = 0; row < grid.length; row++) {
            for (let col = 0; col < grid[row].length; col++) {
                Ember.set(grid[row][col], 'coord', CubeCoord.fromRowCol(row, col));
            }
        }
    },
});
