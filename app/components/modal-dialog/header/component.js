import Ember from 'ember';
import CancelModalMixin from '../mixins/cancel-modal';
const { Component } = Ember;

export default Component.extend(CancelModalMixin, {
    classNames: ['modal-header'],
    label: ""
});
