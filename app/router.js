import Ember from 'ember';
import config from './config/environment';

const { Router } = Ember;

const AppRouter = Router.extend({ location: config.locationType });
AppRouter.map(function () {
    this.route('game', {
        path: '/game/:game_id'
    });
    this.route('new-game');
});

export default AppRouter;
