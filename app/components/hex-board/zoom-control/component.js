import Ember from 'ember';

export default Ember.Component.extend({
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
