import Ember from 'ember';

import Card from '../models/card';

export default Ember.Object.create({
    startingDeck() {
        const name = 'Energy Well';
        const art = '/art/energy-well.jpg';

        return [
            Card.create({name, art}),
            Card.create({name, art}),
            Card.create({name, art}),
            Card.create({name, art}),
            Card.create({name, art})
        ];
    }
});
