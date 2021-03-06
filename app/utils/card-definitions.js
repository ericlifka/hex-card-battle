export default {
    ManaGem: {
        name: 'Mana Gem',
        art: 'PLACEHOLDER',
        displayText: "+1 Mana",
        execute({ player }) {
            player.incrementProperty('resources.mana');
        }
    },
    SimpleOrders: {
        name: 'Simple Orders',
        art: 'PLACEHOLDER',
        displayText: "+1 Action point",
        execute({ player }) {
            player.incrementProperty('resources.actions');
        }
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
        ],
        options: [ '+1 Mana', '+1 Action' ],
        execute({ player, option }) {
            if (option === 1) {
                player.incrementProperty('resources.actions');
            }
            else {
                player.incrementProperty('resources.mana');
            }
        }
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
        ],
        execute() {

        }
    }
};
