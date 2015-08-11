import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
    location: config.locationType
});

Router.map(function () {
    this.resource('game', {
        path: '/game/:game_id'
    });
    this.route('new-game');
});

export default Router;
