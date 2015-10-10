import Ember from 'ember';
const { Component, computed } = Ember;

export default Component.extend({
    classNames: [ 'player-section' ],

    showDialogPrompt: false,
    game: null,
    player: computed.alias('game.phase.activePlayer'),
    hand: computed.alias('player.hand'),

    actions: {
        playCard(card) {
            const game = this.get('game');
            const player = this.get('player');

            //card.execute({
            //    game,
            //    player
            //});

            this.set('showDialogPrompt', true);
        }
    }
});
