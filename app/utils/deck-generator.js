import Ember from 'ember';

import Card from '../models/card';

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

const Cards = {
    EnergyWell: {
        name: 'Energy Well',
        art: '/art/energy-well.jpg'
    }
};
