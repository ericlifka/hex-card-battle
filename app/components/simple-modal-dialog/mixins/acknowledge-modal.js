import Ember from 'ember';
const { computed, Mixin } = Ember;

export default Mixin.create({
    showAcknowledge: computed('acknowledgeDialog', function () {
        return typeof this.attrs.acknowledgeDialog === 'function';
    }),

    actions: {
        acknowledge() {
            this.attrs.acknowledgeDialog();
        }
    }
});
