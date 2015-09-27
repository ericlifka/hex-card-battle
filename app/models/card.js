import Ember from 'ember';
import GameModel from './model-base';

const { computed } = Ember;

export default GameModel.extend({
    name: '',
    art: '',
    mechanics: '',
    displayText: '',

    abilities: computed('displayText', function () {
        const text = this.get('displayText');

        if (typeof text === 'string') {
            return [ text ];
        } else {
            return text;
        }
    })
});
