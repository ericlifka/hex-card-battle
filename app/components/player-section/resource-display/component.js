import Ember from 'ember';

const {
    Component,
    computed
} = Ember;

export default Component.extend({
    classNames: [ 'resource-display' ],

    player: computed.alias('game.phase.activePlayer'),

    actions: computed.alias('player.resources.actions'),
    mana: computed.alias('player.resources.mana')
});
