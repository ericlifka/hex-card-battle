import Ember from 'ember';

export default Ember.Component.extend({
    classNames: ['dynamic-select'],

    description: null,
    contents: null,
    selected: null,

    uniqueId: Ember.computed(function () {
        return Ember.generateGuid(this, "dynamic-select-");
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
