import Ember from 'ember';
import GameModel from './model-base';

const { computed } = Ember;

export default GameModel.extend({
    name: computed(() => ''),
    number: computed(() => ''),

    hand: computed(() => []),
    deck: computed(() => []),
    discard: computed(() => [])
});
