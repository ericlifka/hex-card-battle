'use strict';

define('hex-card-battle/tests/helpers/resolver', ['exports', 'ember/resolver', 'hex-card-battle/config/environment'], function (exports, _resolver, _environment) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });


    var resolver = _resolver.default.create();

    resolver.namespace = {
        modulePrefix: _environment.default.modulePrefix,
        podModulePrefix: _environment.default.podModulePrefix
    };

    exports.default = resolver;
});
define('hex-card-battle/tests/helpers/start-app', ['exports', 'hex-card-battle/app', 'hex-card-battle/router', 'hex-card-battle/config/environment'], function (exports, _app, _router, _environment) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = startApp;
    function startApp(attrs) {
        var application = void 0;

        var attributes = Ember.merge({}, _environment.default.APP);
        attributes = Ember.merge(attributes, attrs); // use defaults, but you can override;

        Ember.run(function () {
            application = _app.default.create(attributes);
            application.setupForTesting();
            application.injectTestHelpers();
        });

        return application;
    }
});
define('hex-card-battle/tests/test-helper', ['hex-card-battle/tests/helpers/resolver', 'ember-qunit'], function (_resolver, _emberQunit) {
  'use strict';

  (0, _emberQunit.setResolver)(_resolver.default);
});
define('hex-card-battle/tests/unit/utils/guid-test', ['hex-card-battle/utils/guid', 'qunit'], function (_guid, _qunit) {
    'use strict';

    (0, _qunit.module)('Unit | Utility | guid');

    // Replace this with your real tests.
    (0, _qunit.test)('should create unique things', function (assert) {
        var g1 = (0, _guid.default)();
        var g2 = (0, _guid.default)();
        assert.ok(g1);
        assert.ok(g2);
        assert.notEqual(g1, g2);
    });
});
require('hex-card-battle/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
