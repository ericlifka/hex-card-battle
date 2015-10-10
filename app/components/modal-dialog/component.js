import Ember from 'ember';

const { Component, computed } = Ember;

export default Component.extend({
    classNames: ['modal-dialog'],

    showDismiss: computed('cancelDialog', function () {
        return typeof this.attrs.cancelDialog === 'function';
    }),

    actions: {
        dismiss() {
            const cancel = this.attrs.cancelDialog;
            if (typeof cancel === 'function') {
                cancel();
            }
        }
    }
});
