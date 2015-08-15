import Ember from 'ember';

import Card from '../models/card';

let Cards;

export default Ember.Object.create({
    startingDeck() {
        return [
            Card.create(Cards.EnergyWell),
            Card.create(Cards.EnergyWell),
            Card.create(Cards.EnergyWell),
            Card.create(Cards.EnergyWell),
            Card.create(Cards.EnergyWell),
            Card.create(Cards.EnergyWell),
            Card.create(Cards.EnergyWell),
            Card.create(Cards.EnergyWell),
            Card.create(Cards.SquirrelScout),
            Card.create(Cards.SquirrelScout)
        ];
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
