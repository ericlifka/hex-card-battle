import Ember from 'ember';

const { Component } = Ember;

export default Component.extend({
    classNames: ['modal-dialog'],

    actions: {
        dismiss() {
            const cancel = this.attrs.cancelDialog;
            if (typeof cancel === 'function') {
                cancel();
            }
        }
    }
});
