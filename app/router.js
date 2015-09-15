import Ember from 'ember';
import config from './config/environment';

const { Router } = Ember;

const AppRouter = Router.extend({ location: config.locationType });
AppRouter.map(function () {
    this.resource('game', {
        path: '/game/:game_id'
    });
    this.route('new-game');
});

export default AppRouter;
