import Ember from 'ember';

import Card from '../models/card';
import R from './ramda';

const Cards = {
    EnergyWell: {
        name: 'Energy Well',
        art: '/art/energy-well.jpg'
    },
    SquirrelScout: {
        name: 'Squirrel Scout',
        art: '/art/squirrel-scout.png'
    }
};

const createCardGenerator = cardDef => function () {
    return Card.create(cardDef);
};

const Generators = R.mapObj(createCardGenerator, Cards);

export default Ember.Object.create({
    startingDeck() {
        return R.flatten([
            R.map(Generators.EnergyWell, R.range(0, 8)),
            R.map(Generators.SquirrelScout, R.range(0, 2))
        ]);
    },

    newDrawDeck() {
        return [];
    }
});
