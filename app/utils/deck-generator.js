import Ember from 'ember';

import Card from '../models/card';

let Cards;

export default Ember.Object.create({
    startingDeck() {
        return R.flatten([
            R.map(() => Card.create(Cards.EnergyWell), R.range(0, 8)),
            R.map(() => Card.create(Cards.SquirrelScout), R.range(0, 2))
        ]);
    },

    newDrawDeck() {
        return [];
    }
});

Cards = {

    EnergyWell: {
        name: 'Energy Well',
        art: '/art/energy-well.jpg'
    },

    SquirrelScout: {
        name: 'Squirrel Scout',
        art: '/art/squirrel-scout.png'
    }
};
