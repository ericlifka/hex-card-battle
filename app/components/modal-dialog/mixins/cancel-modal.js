import Ember from 'ember';
const { computed, Mixin } = Ember;

export default Mixin.create({
    showDismiss: computed('cancelDialog', function () {
        return typeof this.attrs.cancelDialog === 'function';
    }),

    actions: {
        dismiss() {
            this.attrs.cancelDialog();
        }
    }
});
