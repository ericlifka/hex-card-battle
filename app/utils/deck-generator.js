import Card from '../models/card';
import Cards from './card-definitions';
import R from './ramda';

const createCardGenerator = cardDef => function () {
    return Card.create(cardDef);
};

const Generators = R.mapObj(createCardGenerator, Cards);

export default {
    startingDeck() {
        const expandCard = ([cardGen, count]) => R.map(cardGen, R.range(0, count));
        const nestedDeck = R.map(expandCard, [
            [Generators.ManaGem, 6],
            [Generators.SimpleOrders, 2],
            [Generators.MagicalCommand, 1],
            [Generators.SummonBasicUnit, 1]
        ]);

        return R.flatten(nestedDeck);
    },

    newDrawDeck() {
        return [];
    }
};
