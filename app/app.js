import Ember from 'ember';
import Resolver from 'ember/resolver';
import loadInitializers from 'ember/load-initializers';
import config from './config/environment';

const { modulePrefix, podModulePrefix } = config;
const { Application } = Ember;
Ember.MODEL_FACTORY_INJECTIONS = true;

const App = Application.extend({ modulePrefix, podModulePrefix, Resolver });
loadInitializers(App, config.modulePrefix);

export default App;
