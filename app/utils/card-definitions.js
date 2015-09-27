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
        ],
        displayText: "+1 Mana"
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
        ],
        displayText: "+1 Action point"
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
        ],
        displayText: [
            "Choose:",
            "+1 Mana or",
            "+1 Action point"
        ]
    },
    SummonBasicUnit: {
        name: 'Summon Unit',
        art: 'PLACEHOLDER',
        mechanics: [
            {
                type: 'summon-unit',
                options: [ 'squirrel-scout' ],
                cost: 3
            }
        ],
        displayText: [
            "Summon:",
            "Squirrel Scout"
        ]
    }
};
