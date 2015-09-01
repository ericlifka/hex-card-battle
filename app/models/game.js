import Ember from 'ember';
import DeckGenerator from '../utils/deck-generator';
import { shuffle } from '../utils/ramda';

export default Ember.Object.extend({
    /* Public Properties API */
    id: null,
    board: null,
    players: null,
    activeHex: null,

    phase: null,
    drawDeck: null,
    cardMarketCards: null,

    setInitialGameState: Ember.on('init', function () {
        this.set('phase', Ember.Object.create({
            currentPlayer: 0,
            isTurnTransition: false
        }));

        this.set('drawDeck', shuffle(DeckGenerator.newDrawDeck()));
        this.set('cardMarketCards', []);
    }),

    /* Public Function API */
    clickHex(hex) {
        const active = this.get('activeHex');
        if (active !== hex) {
            this.deactivateHex(active);
            this.activateHex(hex);
            this.set('activeHex', hex);
        } else {
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
