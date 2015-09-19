import GameModel from './model-base';
import Ember from 'ember';
const { computed } = Ember;

export default GameModel.extend({
    /* Public Properties API */
    id: null,
    board: null,
    players: null,
    activeHex: null,

    drawDeck: null,
    phase: computed(() => GameModel.create({
        gamePhase: 'gameStart',
        activePlayer: null,
        activePlayerIndex: null,
        turn: 0
    })),
    cardMarketCards: computed(() => []),

    /* Public Function API */
    clickHex(hex) {
        const active = this.get('activeHex');
        if (active !== hex) {
            this.deactivateHex(active);
            this.activateHex(hex);
            this.set('activeHex', hex);
        }
        else {
            this.deactivateHex(hex);
            this.set('activeHex', null);
        }
    },

    activateHex(hex) {
        if (hex) {
            hex.set('state', 'active');
            hex.coord.adjacentCoords().forEach(coord => {
                const adjacentHex = this.board.lookupHex(coord);
                if (adjacentHex) {
                    adjacentHex.set('state', 'secondary');
                }
            });
        }
    },

    deactivateHex(hex) {
        if (hex) {
            hex.set('state', null);
            hex.coord.adjacentCoords().forEach(coord => {
                const adjacentHex = this.board.lookupHex(coord);
                if (adjacentHex) {
                    adjacentHex.set('state', null);
                }
            });
        }
    },

    lookupHex(coord) {
        return this.board.lookupHex(coord);
    }
});
