import Ember from 'ember';

import Card from '../models/card';
import Cards from './card-definitions';
import R from './ramda';

const createCardGenerator = cardDef => function () {
    return Card.create(cardDef);
};

const Generators = R.mapObj(createCardGenerator, Cards);

export default Ember.Object.create({
    startingDeck() {
        return R.flatten([
            R.map(Generators.ManaGem, R.range(0, 8)),
            R.map(Generators.SummonBasicUnit, R.range(0, 2))
        ]);
    },

    newDrawDeck() {
        return [];
    }
});
