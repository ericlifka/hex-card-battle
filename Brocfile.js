/* global require, module */

var funnel = require('broccoli-funnel');
var mergeTrees = require('broccoli-merge-trees');

var EmberApp = require('ember-cli/lib/broccoli/ember-app');

var app = new EmberApp({
    lessOptions: {
        paths: [
            'app/components'
        ]
    }
});

app.import('bower_components/ionicons/css/ionicons.css');

var ionicons = funnel('bower_components/ionicons/fonts', {
    srcDir: '/',
    destDir: '/fonts'
});

module.exports = mergeTrees([
    app.toTree(),
    ionicons
], {
    overwrite: true
});
