import Ember from 'ember';
import CancelModalMixin from '../mixins/cancel-modal';
import AcknowledgeModalMixin from '../mixins/acknowledge-modal';
const { Component } = Ember;

export default Component.extend(CancelModalMixin, AcknowledgeModalMixin, {
    classNames: ['modal-footer']
});
