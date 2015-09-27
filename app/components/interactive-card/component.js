import Ember from 'ember';
const { Component, computed } = Ember;

export default Component.extend({
    classNames: [ 'interactive-card' ],

    card: null,

    name: computed.alias('card.name'),
    art: computed.alias('card.art'),

    displayText: computed('card.displayText', function () {
        const text = this.get('card.displayText');

        if (typeof text === "string") {
            return [ text ];
        }

        return text;
    })
});
