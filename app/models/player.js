import Ember from 'ember';
import GameModel from './model-base';
import { shuffle } from '../utils/ramda';

const { computed } = Ember;

export default GameModel.extend({
    name: computed(() => ''),
    number: computed(() => ''),

    hand: computed(() => []),
    deck: computed(() => []),
    discard: computed(() => []),

    refillHand() {
        while (this.get('hand.length') < 5) {
            const empty = this.drawCard();
            if (empty) {
                break;
            }
        }
    },

    drawCard() {
        const deck = this.get('deck');
        const discard = this.get('discard');
        const hand = this.get('hand');

        if (deck.get('length') === 0) {
            if (discard.get('length') === 0) {
                return true;
            }
            else {
                this.refreshDeck();
            }
        }

        hand.pushObject(deck.popObject());
    },

    refreshDeck() {
        const deck = this.get('deck');
        const discard = this.get('discard');

        deck.pushObjects(discard);
        this.set('deck', shuffle(deck));
        this.set('discard', []);
    }
});
