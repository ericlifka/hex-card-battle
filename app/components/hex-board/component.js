import Ember from 'ember';
const { Component, computed } = Ember;

const ZOOM_MIN = 0;
const ZOOM_MAX = 4;

export default Component.extend({
    classNameBindings: [':hex-board'],

    game: null,
    zoom: 1,
    grid: computed.alias('game.board.grid'),

    zoomClass: computed('zoom', function () {
        return `zoom-${this.get('zoom')}`;
    }),

    actions: {
        zoomIn() {
            this.set('zoom', Math.max(this.get('zoom') - 1, ZOOM_MIN));
        },

        zoomOut() {
            this.set('zoom', Math.min(this.get('zoom') + 1, ZOOM_MAX));
        }
    }
});
