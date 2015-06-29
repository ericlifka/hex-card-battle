import Ember from 'ember';

export default Ember.Component.extend({
    classNames: ['dynamic-select'],

    description: null,
    contents: null,

    uniqueId: Ember.computed(function () {
        return Ember.generateGuid(this, "dynamic-select-");
    })
});
