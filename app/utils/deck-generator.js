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
            Card.create(Cards.EnergyWell)
        ];
    }
});

Cards = {
    EnergyWell: {
        name: 'Energy Well',
        art: '/art/energy-well.jpg'
    }
};
