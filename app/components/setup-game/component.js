import Ember from 'ember';

export default Ember.Component.extend({
    classNames: ['setup-game-component'],

    playerCounts: [2, 3, 4],
    selectedPlayerCount: 2,

    actions: {
        change() {
            const selectedEl = this.$('select#playerCount')[0];
            const selectedIndex = selectedEl.selectedIndex;
            const playerCounts = this.get('playerCounts');
            const selectedCount = playerCounts[selectedIndex];

            this.set('selectedPlayerCount', selectedCount);
        }
    }
});
