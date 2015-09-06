import Ember from 'ember';
const { Component } = Ember;

export default Component.extend({
    classNames: ['zoom-control'],

    actions: {
        zoomIn() {
            this.attrs.zoomIn();
        },

        zoomOut() {
            this.attrs.zoomOut();
        }
    }
});
