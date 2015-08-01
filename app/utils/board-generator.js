import Ember from 'ember';

import Board from '../models/board';
import CubeCoord from '../models/cube-coord';

import rand from './rand';

export default Ember.Object.create({
    generate(width, shape) {
        const board = Board.create({
            grid: this.emptyGrid(width)
        });

        if (shape === 'square') {
            this.fillSquareBoard(board);
        }

        else if (shape === 'hexagon') {
            this.fillHexBoard(board);
        }

        else if (shape === 'random') {
            this.fillRandomBoard(board);
        }

        return board;
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

    fillSquareBoard(board, type = 'forest') {
        board.get('grid').forEach(row => row.forEach(hex => {
            hex.set('type', type);
        }));
    },

    fillHexBoard(board, type = 'forest') {
        const grid = board.get('grid');
        const width = Math.min(grid.length, grid[0].length);
        const size = (width + 1) / 2;
        const midPoint = Math.floor(width / 2);

        const middle = grid[midPoint][midPoint].get('coord');

        grid.forEach(row => row.forEach(hex => {
            if (middle.distanceFrom(hex.get('coord')) < size) {
                hex.set('type', type);
            }
        }));
    },

    fillRandomBoard(board) {
        this.randomizeHexes(board);
        this.eliminateIsolatedIslands(board);
        this.eliminateIsolatedEmptyZones(board);
        this.randomizeLake(board);
        this.addPrimaryResourceNodes(board);
        this.addSecondaryResourceNodes(board);
    },

    randomizeHexes(board) {
        const grid = board.get('grid');
        const width = Math.min(grid.length, grid[0].length);
        const midPoint = Math.floor(width / 2);
        const breakOverThreshold = midPoint * 0.75;

        const middle = grid[midPoint][midPoint].get('coord');
        const max = middle.distanceFrom(grid[0][0].get('coord'));

        grid.forEach(row => row.forEach(hex => {
            hex.set('type', 'forest');

            const distance = middle.distanceFrom(hex.get('coord'));

            if (distance > breakOverThreshold) {
                const breakOverWeight = (distance - breakOverThreshold) / (max - breakOverThreshold);

                if (Math.random() < breakOverWeight) {
                    hex.set('type', 'empty');
                }
            }
        }));
    },

    eliminateIsolatedIslands(board) {
        const grid = board.get('grid');
        const width = Math.min(grid.length, grid[0].length);
        const midPoint = Math.floor(width / 2);
        const middle = grid[midPoint][midPoint];
        const queue = [middle];
        middle.mainland = true;

        while (queue.length > 0) {
            const hex = queue.shift();

            hex.coord.adjacentCoords().forEach(coord => {
                const neighbor = board.lookupHex(coord);
                if (neighbor && neighbor.type !== 'empty' && !neighbor.mainland) {
                    neighbor.mainland = true;
                    queue.push(neighbor);
                }
            });
        }

        grid.forEach(row => row.forEach(hex => {
            if (!hex.mainland) {
                hex.set('type', 'empty');
            }

            delete hex.mainland;
        }));
    },

    eliminateIsolatedEmptyZones(board) {
        const grid = board.get('grid');
        const queue = [];
        const hexChecker = hex => {
            if (hex && hex.type === 'empty' && !hex.mainempty) {
                hex.mainempty = true;
                queue.push(hex);
            }
        };

        grid.get('firstObject').forEach(hexChecker);
        grid.get('lastObject').forEach(hexChecker);
        grid.forEach(row => {
            hexChecker(row.get('firstObject'));
            hexChecker(row.get('lastObject'));
        });

        while (queue.length > 0) {
            const hex = queue.shift();

            hex.coord.adjacentCoords().forEach(coord => {
                hexChecker(board.lookupHex(coord));
            });
        }

        grid.forEach(row => row.forEach(hex => {
            if (!hex.mainempty && hex.type === 'empty') {
                hex.set('type', 'lake');
            }

            delete hex.mainempty;
        }));
    },

    randomizeLake(board) {
        const queue = [];
        const grid = board.get('grid');
        const stepDown = this.probabilityStepDown(grid);
        const lakeSeed = this.getRandomCentralHex(grid);

        lakeSeed.probability = 1;
        queue.push(lakeSeed);

        while (queue.length > 0) {
            const hex = queue.shift();

            if (rand.bool(hex.probability)) {
                hex.set('type', 'lake');
                const propagationProbability = hex.probability - stepDown;

                if (propagationProbability > 0) {
                    hex.coord.adjacentCoords().forEach(coord => {
                        const adjacentHex = board.lookupHex(coord);

                        if (adjacentHex && adjacentHex.type !== 'empty' && !adjacentHex.probability) {
                            adjacentHex.probability = propagationProbability;
                            queue.push(adjacentHex);
                        }
                    });
                }
            }
        }

        board.grid.forEach(row => row.forEach(hex => {
            delete hex.probability;
        }));
    },

    getRandomCentralHex(grid) {
        const size = Math.min(grid.length, grid[0].length);

        const midPoint = Math.floor(size / 2);
        const range = Math.floor(size / 6);

        const minRange = midPoint - range;
        const maxRange = midPoint + range;

        const xRand = rand.range(minRange, maxRange);
        const yRand = rand.range(minRange, maxRange);

        return grid[xRand][yRand];
    },

    probabilityStepDown(grid) {
        const size = Math.min(grid.length, grid[0].length);

        return size >= 40 ? 0.05 :
            size >= 20 ? 0.1 :
                0.2;
    },

    addPrimaryResourceNodes(board) {
        board.get('grid').forEach(row => row.forEach(hex => {
            const neighbors = this.getNeighbors(hex, board);
            if (hex.type === 'forest' &&
                this.countNeighbors(neighbors, 'forest') <= 1 &&
                this.countNeighbors(neighbors, 'resource-primary') === 0) {

                hex.set('type', 'resource-primary');
            }
        }));
    },

    addSecondaryResourceNodes(board) {
        board.get('grid').forEach(row => row.forEach(hex => {
            const neighbors = this.getNeighbors(hex, board);
            const forest = this.countNeighbors(neighbors, 'forest');
            const primary = this.countNeighbors(neighbors, 'resource-primary');
            const secondary = this.countNeighbors(neighbors, 'resource-secondary');

            if (hex.type === 'forest' && primary === 0 && secondary === 0 && forest <= 2) {
                hex.set('type', 'resource-secondary');
            }
        }));
    },

    getNeighbors(hex, board) {
        return hex.coord.adjacentCoords().map(coord => board.lookupHex(coord));
    },

    countNeighbors(neighbors, type) {
        let count = 0;
        neighbors.forEach(hex => {
            if (hex && hex.get('type') === type) {
                count++;
            }
        });
        return count;
    }
});
