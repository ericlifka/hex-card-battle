export default {
    ManaGem: {
        name: 'Mana Gem',
        art: 'PLACEHOLDER',
        mechanics: [
            {
                type: 'resource-grant',
                resource: 'mana',
                count: 1
            }
        ]
    },
    SimpleOrders: {
        name: 'Simple Orders',
        art: 'PLACEHOLDER',
        mechanics: [
            {
                type: 'resource-grant',
                resource: 'action',
                count: 1
            }
        ]
    },
    MagicalCommand: {
        name: 'Magical Command',
        art: 'PLACEHOLDER',
        mechanics: [
            {
                type: 'resource-grant',
                resource: 'mana',
                count: 1
            },
            {
                type: 'resource-grant',
                resource: 'action',
                count: 1
            }
        ]
    },
    SummonBasicUnit: {
        name: 'Summon Unit',
        art: 'PLACEHOLDER',
        mechanics: [
            {
                type: 'summon-unit',
                options: ['squirrel-scout'],
                cost: 3
            }
        ]
    }
};
