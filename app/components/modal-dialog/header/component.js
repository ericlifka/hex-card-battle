import Ember from 'ember';
const { Component, computed } = Ember;

export default Component.extend({
    classNames: ['modal-header'],

    showDismiss: computed('cancelDialog', function () {
        return typeof this.attrs.cancelDialog === 'function';
    }),

    actions: {
        dismiss() {
            this.attrs.cancelDialog();
        }
    }
});
