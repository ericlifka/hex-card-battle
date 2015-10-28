import Ember from 'ember';
const { Component, computed, K } = Ember;

export default Component.extend({
    classNames: [ 'player-section' ],

    showDialogPrompt: false,
    cancelDialog: null,

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

            if (card.options) {
                this.set('selectCardOptions', card.options);
                this.set('chooseCardOption', option => {
                    card.execute({
                        player,
                        option
                    });
                    this.set('showDialogPrompt', false);
                });
                this.set('cancelDialog', () => {
                    this.set('showDialogPrompt', false)
                });

                this.set('showDialogPrompt', true);
            }
            else {
                card.execute({ player });
            }
        }
    }
});
