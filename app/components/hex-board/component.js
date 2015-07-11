import Ember from 'ember';

export default Ember.Component.extend({
    classNameBindings: [':hex-board', 'zoomClass'],

    game: null,
    zoom: null,

    zoomClass: Ember.computed('zoom', function () {
        return `zoom-${this.get('zoom')}`;
    })
});
