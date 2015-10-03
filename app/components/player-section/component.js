import Ember from 'ember';
const { Component, computed } = Ember;

export default Component.extend({
    classNames: [ 'player-section' ],

    game: null,
    player: computed.alias('game.phase.activePlayer'),
    hand: computed.alias('player.hand'),

    actions: {
        playCard(card) {
            let ability = card.mechanics[ 0 ];
            if (card.mechanics.length > 1) {
                // player needs to choose which ability to use
            }

            switch (ability.type) {
                case 'resource-grant':
                    this.resourceGrant(ability);
                    break;

                case 'summon-unit':
                    break;

                default:
                    console.error(`Unrecognized mechanic type: ${ability.type}`);
            }
        }
    },

    resourceGrant(ability) {
        let resourceProperty;
        if (ability.resource === 'action') {
            resourceProperty = 'actions';
        } else if (ability.resource === 'mana') {
            resourceProperty = 'mana';
        } else {
            console.error(`Unrecognized resource type: ${ability.resource}`);
            return;
        }

        this.get('player.resources').incrementProperty(resourceProperty);
    }
});
