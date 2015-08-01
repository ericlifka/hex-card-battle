import Ember from 'ember';

const ZOOM_MIN = 0;
const ZOOM_MAX = 4;

export default Ember.Component.extend({
    classNameBindings: [':hex-board'],

    game: null,
    zoom: 1,
    grid: Ember.computed.alias('game.board.grid'),

    zoomClass: Ember.computed('zoom', function () {
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
