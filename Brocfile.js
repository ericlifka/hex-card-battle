/* global require, module */

var EmberApp = require('ember-cli/lib/broccoli/ember-app');

var app = new EmberApp({
    lessOptions: {
        paths: [
            'app/components'
        ]
    }
});

module.exports = app.toTree();
