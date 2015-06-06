import Ember from 'ember';

export default Ember.Component.extend({
    classNameBindings: [':hex', 'cell.type'],

    cell: null
});
