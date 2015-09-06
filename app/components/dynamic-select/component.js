import Ember from 'ember';
const { Component, computed, generateGuid } = Ember;

export default Component.extend({
    classNames: ['dynamic-select'],

    description: null,
    contents: null,
    selected: null,

    uniqueId: computed(function () {
        return generateGuid(this, "dynamic-select-");
    }),

    actions: {
        change() {
            const contents = this.get('contents');
            const action = this.get('action');

            const selectedOption = this.$("select option:selected");
            const index = selectedOption.index();
            const selected = contents[index];

            this.set('selected', selected);
            action(selected);
        }
    }
});
