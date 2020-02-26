"use strict";



define('hex-card-battle/app', ['exports', 'hex-card-battle/resolver', 'ember-load-initializers', 'hex-card-battle/config/environment'], function (exports, _resolver, _emberLoadInitializers, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var modulePrefix = _environment.default.modulePrefix,
      podModulePrefix = _environment.default.podModulePrefix;
  var Application = Ember.Application;

  Ember.MODEL_FACTORY_INJECTIONS = true;

  var App = Application.extend({ modulePrefix: modulePrefix, podModulePrefix: podModulePrefix, Resolver: _resolver.default });
  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);

  exports.default = App;
});
define('hex-card-battle/components/card-market/component', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    var Component = Ember.Component,
        computed = Ember.computed;
    exports.default = Component.extend({
        classNames: ['card-market'],

        game: null,
        cards: computed.alias('game.cardMarketCards')
    });
});
define("hex-card-battle/components/card-market/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "SJjLWTEJ", "block": "{\"statements\":[[6,[\"flyout-panel\"],null,[[\"title\",\"position\"],[\"Card market\",\"top-right\"]],{\"statements\":[[0,\"    \"],[11,\"div\",[]],[15,\"class\",\"card-row\"],[13],[0,\"\\n\"],[6,[\"each\"],[[28,[\"cards\"]]],null,{\"statements\":[[0,\"            \"],[1,[33,[\"interactive-card\"],null,[[\"card\"],[[28,[\"card\"]]]]],false],[0,\"\\n\"]],\"locals\":[\"card\"]},null],[0,\"    \"],[14],[0,\"\\n\"]],\"locals\":[]},null]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "hex-card-battle/components/card-market/template.hbs" } });
});
define('hex-card-battle/components/dynamic-select/component', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    var Component = Ember.Component,
        computed = Ember.computed,
        generateGuid = Ember.generateGuid;
    exports.default = Component.extend({
        classNames: ['dynamic-select'],

        description: null,
        contents: null,
        selected: null,

        uniqueId: computed(function () {
            return generateGuid(this, "dynamic-select-");
        }),

        actions: {
            change: function change() {
                var contents = this.get('contents');
                var action = this.get('action');

                var selectedOption = this.$("select option:selected");
                var index = selectedOption.index();
                var selected = contents[index];

                this.set('selected', selected);
                action(selected);
            }
        }
    });
});
define("hex-card-battle/components/dynamic-select/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "iuHHOa2j", "block": "{\"statements\":[[11,\"label\",[]],[16,\"for\",[34,[[26,[\"uniqueId\"]]]]],[13],[1,[26,[\"description\"]],false],[14],[0,\"\\n\"],[11,\"select\",[]],[16,\"id\",[34,[[26,[\"uniqueId\"]]]]],[5,[\"action\"],[[28,[null]],\"change\"],[[\"on\"],[\"change\"]]],[13],[0,\"\\n\"],[6,[\"each\"],[[28,[\"contents\"]]],[[\"key\"],[\"@index\"]],{\"statements\":[[0,\"        \"],[11,\"option\",[]],[16,\"value\",[34,[[28,[\"item\"]]]]],[16,\"selected\",[33,[\"eq\"],[[28,[\"item\"]],[28,[\"selected\"]]],null],null],[13],[0,\"\\n            \"],[1,[28,[\"item\"]],false],[0,\"\\n        \"],[14],[0,\"\\n\"]],\"locals\":[\"item\"]},null],[14],[0,\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "hex-card-battle/components/dynamic-select/template.hbs" } });
});
define('hex-card-battle/components/flyout-panel/component', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    var Component = Ember.Component,
        computed = Ember.computed;
    exports.default = Component.extend({
        classNameBindings: [':flyout-panel', 'layoutClasses'],
        expanded: false,
        position: null,

        layoutClasses: computed('position', function () {
            var position = this.get('position');

            if (position === 'top-right') {
                return 'button-on-left title-on-bottom';
            } else if (position === 'bottom-left') {
                return 'button-on-right title-on-top';
            } else {
                return '';
            }
        }),

        actions: {
            toggleExpanded: function toggleExpanded() {
                this.toggleProperty('expanded');
            }
        }
    });
});
define("hex-card-battle/components/flyout-panel/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "DUA0Dmm0", "block": "{\"statements\":[[11,\"div\",[]],[15,\"class\",\"content\"],[13],[0,\"\\n\"],[6,[\"if\"],[[28,[\"expanded\"]]],null,{\"statements\":[[0,\"        \"],[18,\"default\"],[0,\"\\n\"]],\"locals\":[]},null],[14],[0,\"\\n\\n\"],[11,\"button\",[]],[15,\"class\",\"panel-label modal-banner\"],[5,[\"action\"],[[28,[null]],\"toggleExpanded\"]],[13],[0,\"\\n    \"],[11,\"div\",[]],[15,\"class\",\"icon\"],[13],[0,\"\\n        \"],[11,\"span\",[]],[16,\"class\",[34,[[33,[\"if\"],[[28,[\"expanded\"]],\"ion-android-contract\",\"ion-android-expand\"],null]]]],[13],[14],[0,\"\\n    \"],[14],[0,\"\\n    \"],[11,\"div\",[]],[15,\"class\",\"label\"],[13],[1,[26,[\"title\"]],false],[14],[0,\"\\n\"],[14],[0,\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[\"default\"],\"hasPartials\":false}", "meta": { "moduleName": "hex-card-battle/components/flyout-panel/template.hbs" } });
});
define('hex-card-battle/components/game-board/component', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    var Component = Ember.Component;
    exports.default = Component.extend({
        classNames: ['game-board'],

        game: null,

        debugGame: Ember.observer('game', function () {
            window.activeGame = this.get('game');
        }).on('init'),

        actions: {
            startGame: function startGame() {
                var phase = this.get('game.phase');
                var players = this.get('game.players');

                phase.set('gamePhase', 'turnStart');
                phase.set('activePlayerIndex', 0);
                phase.set('activePlayer', players.get('firstObject'));

                players.forEach(function (player) {
                    return player.refreshDeck();
                });
            },
            startTurn: function startTurn() {
                var player = this.get('game.phase.activePlayer');

                player.refillHand();
                player.resetResources();

                this.set('game.phase.gamePhase', 'turnActive');
            }
        }
    });
});
define("hex-card-battle/components/game-board/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "Hc1zNaiz", "block": "{\"statements\":[[1,[33,[\"hex-board\"],null,[[\"game\"],[[28,[\"game\"]]]]],false],[0,\"\\n\"],[1,[33,[\"player-display\"],null,[[\"game\"],[[28,[\"game\"]]]]],false],[0,\"\\n\"],[1,[33,[\"card-market\"],null,[[\"game\"],[[28,[\"game\"]]]]],false],[0,\"\\n\"],[1,[33,[\"player-section\"],null,[[\"game\"],[[28,[\"game\"]]]]],false],[0,\"\\n\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "hex-card-battle/components/game-board/template.hbs" } });
});
define('hex-card-battle/components/hex-board/component', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    var Component = Ember.Component,
        computed = Ember.computed;


    var ZOOM_MIN = 0;
    var ZOOM_MAX = 4;

    exports.default = Component.extend({
        classNameBindings: [':hex-board'],

        game: null,
        zoom: 1,
        grid: computed.alias('game.board.grid'),

        debugGame: Ember.observer('game', 'game.board.grid', function () {
            window.activeGrid = this.get('grid');
        }).on('init'),

        zoomClass: computed('zoom', function () {
            return 'zoom-' + this.get('zoom');
        }),

        actions: {
            zoomIn: function zoomIn() {
                this.set('zoom', Math.max(this.get('zoom') - 1, ZOOM_MIN));
            },
            zoomOut: function zoomOut() {
                this.set('zoom', Math.min(this.get('zoom') + 1, ZOOM_MAX));
            }
        }
    });
});
define('hex-card-battle/components/hex-board/hex-tile/component', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    var Component = Ember.Component,
        computed = Ember.computed,
        inject = Ember.inject;
    exports.default = Component.extend({
        classNameBindings: [':hex-tile', 'hex.type', 'hex.state'],

        debug: inject.service(),

        game: null,
        hex: null,

        chrip: Ember.observer('hex', function () {
            console.log('hex-tile lives!');
        }).on('init'),

        hasResource: computed('hex.type', function () {
            var type = this.get('hex.type');

            return type === 'resource-primary' || type === 'resource-secondary';
        }),

        click: function click() {
            if (this.get('hex.type') !== 'empty') {
                this.get('game').clickHex(this.get('hex'));
            }
        }
    });
});
define("hex-card-battle/components/hex-board/hex-tile/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "i72kmTsm", "block": "{\"statements\":[[6,[\"if\"],[[28,[\"debug\",\"showVisualDebugInfo\"]]],null,{\"statements\":[[0,\"    \"],[11,\"span\",[]],[15,\"class\",\"coordinate x\"],[13],[1,[28,[\"hex\",\"coord\",\"x\"]],false],[14],[0,\"\\n    \"],[11,\"span\",[]],[15,\"class\",\"coordinate y\"],[13],[1,[28,[\"hex\",\"coord\",\"y\"]],false],[14],[0,\"\\n    \"],[11,\"span\",[]],[15,\"class\",\"coordinate z\"],[13],[1,[28,[\"hex\",\"coord\",\"z\"]],false],[14],[0,\"\\n\"]],\"locals\":[]},null],[0,\"\\n\"],[6,[\"if\"],[[28,[\"hasResource\"]]],null,{\"statements\":[[0,\"    \"],[11,\"span\",[]],[15,\"class\",\"resource\"],[13],[14],[0,\"\\n\"]],\"locals\":[]},null]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "hex-card-battle/components/hex-board/hex-tile/template.hbs" } });
});
define("hex-card-battle/components/hex-board/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "JPCT7v2F", "block": "{\"statements\":[[11,\"div\",[]],[16,\"class\",[34,[\"grid \",[26,[\"zoomClass\"]]]]],[13],[0,\"\\n\"],[6,[\"each\"],[[28,[\"grid\"]]],null,{\"statements\":[[0,\"      \"],[11,\"div\",[]],[15,\"class\",\"row\"],[13],[0,\"\\n\"],[6,[\"each\"],[[28,[\"row\"]]],null,{\"statements\":[[0,\"          \"],[1,[33,[\"hex-board/hex-tile\"],null,[[\"hex\",\"game\"],[[28,[\"hex\"]],[28,[\"game\"]]]]],false],[0,\"\\n\"]],\"locals\":[\"hex\"]},null],[0,\"      \"],[14],[0,\"\\n\\n\"]],\"locals\":[\"row\"]},null],[14],[0,\"\\n\\n\"],[1,[33,[\"hex-board/zoom-control\"],null,[[\"zoomIn\",\"zoomOut\"],[[33,[\"action\"],[[28,[null]],\"zoomIn\"],null],[33,[\"action\"],[[28,[null]],\"zoomOut\"],null]]]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "hex-card-battle/components/hex-board/template.hbs" } });
});
define('hex-card-battle/components/hex-board/zoom-control/component', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    var Component = Ember.Component;
    exports.default = Component.extend({
        classNames: ['zoom-control'],

        actions: {
            zoomIn: function zoomIn() {
                this.attrs.zoomIn();
            },
            zoomOut: function zoomOut() {
                this.attrs.zoomOut();
            }
        }
    });
});
define("hex-card-battle/components/hex-board/zoom-control/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "3ZNOT79f", "block": "{\"statements\":[[11,\"button\",[]],[5,[\"action\"],[[28,[null]],\"zoomIn\"]],[13],[0,\"\\n    \"],[11,\"i\",[]],[15,\"class\",\"icon ion-plus-round\"],[13],[14],[0,\"\\n\"],[14],[0,\"\\n\"],[11,\"button\",[]],[5,[\"action\"],[[28,[null]],\"zoomOut\"]],[13],[0,\"\\n    \"],[11,\"i\",[]],[15,\"class\",\"icon ion-minus-round\"],[13],[14],[0,\"\\n\"],[14],[0,\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "hex-card-battle/components/hex-board/zoom-control/template.hbs" } });
});
define('hex-card-battle/components/interactive-card/component', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    var Component = Ember.Component,
        computed = Ember.computed;
    exports.default = Component.extend({
        classNames: ['interactive-card'],

        card: null,

        name: computed.alias('card.name'),
        art: computed.alias('card.art'),
        abilities: computed.alias('card.abilities')
    });
});
define("hex-card-battle/components/interactive-card/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "2+s0LQT1", "block": "{\"statements\":[[11,\"div\",[]],[15,\"class\",\"card-internal\"],[13],[0,\"\\n    \"],[11,\"div\",[]],[15,\"class\",\"header\"],[13],[1,[26,[\"name\"]],false],[14],[0,\"\\n    \"],[11,\"img\",[]],[16,\"src\",[34,[[26,[\"art\"]]]]],[15,\"class\",\"art\"],[13],[14],[0,\"\\n    \"],[11,\"div\",[]],[15,\"class\",\"rules\"],[13],[0,\"\\n\"],[6,[\"each\"],[[28,[\"abilities\"]]],null,{\"statements\":[[0,\"            \"],[11,\"div\",[]],[15,\"class\",\"line\"],[13],[1,[28,[\"line\"]],false],[14],[0,\"\\n\"]],\"locals\":[\"line\"]},null],[0,\"    \"],[14],[0,\"\\n\"],[14]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "hex-card-battle/components/interactive-card/template.hbs" } });
});
define('hex-card-battle/components/player-display/component', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    var Component = Ember.Component,
        computed = Ember.computed;
    exports.default = Component.extend({
        classNames: ['player-display'],

        game: null,
        players: computed.alias('game.players'),
        activePlayer: computed.alias('game.phase.activePlayer')
    });
});
define("hex-card-battle/components/player-display/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "EQkC2mLZ", "block": "{\"statements\":[[6,[\"each\"],[[28,[\"players\"]]],null,{\"statements\":[[0,\"    \"],[11,\"div\",[]],[16,\"class\",[34,[\"player \",[33,[\"if\"],[[33,[\"eq\"],[[28,[\"activePlayer\"]],[28,[\"player\"]]],null],\"active\"],null]]]],[13],[0,\"\\n        \"],[1,[28,[\"player\",\"name\"]],false],[0,\"\\n    \"],[14],[0,\"\\n\"]],\"locals\":[\"player\"]},null]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "hex-card-battle/components/player-display/template.hbs" } });
});
define('hex-card-battle/components/player-section/component', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    var Component = Ember.Component,
        computed = Ember.computed,
        K = Ember.K;
    exports.default = Component.extend({
        classNames: ['player-section'],

        showDialogPrompt: false,
        cancelDialog: null,

        game: null,
        player: computed.alias('game.phase.activePlayer'),
        hand: computed.alias('player.hand'),

        actions: {
            playCard: function playCard(card, index) {
                var _this = this;

                var game = this.get('game');
                var player = this.get('player');

                if (card.options) {
                    this.set('selectCardOptions', card.options);
                    this.set('chooseCardOption', function (option) {
                        card.execute({
                            game: game,
                            player: player,
                            option: option
                        });
                        player.discardCard(index);
                        _this.set('showDialogPrompt', false);
                    });
                    this.set('cancelDialog', function () {
                        _this.set('showDialogPrompt', false);
                    });

                    this.set('showDialogPrompt', true);
                } else {
                    card.execute({ game: game, player: player });
                    player.discardCard(index);
                }
            }
        }
    });
});
define('hex-card-battle/components/player-section/phase-changer/component', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    var Component = Ember.Component;
    exports.default = Component.extend({
        classNames: ['phase-changer']
    });
});
define("hex-card-battle/components/player-section/phase-changer/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "zITM25xM", "block": "{\"statements\":[],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "hex-card-battle/components/player-section/phase-changer/template.hbs" } });
});
define('hex-card-battle/components/player-section/resource-display/component', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    var Component = Ember.Component,
        computed = Ember.computed;
    exports.default = Component.extend({
        classNames: ['resource-display'],

        player: computed.alias('game.phase.activePlayer'),

        actions: computed.alias('player.resources.actions'),
        mana: computed.alias('player.resources.mana')
    });
});
define("hex-card-battle/components/player-section/resource-display/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "6xzBgjIR", "block": "{\"statements\":[[11,\"div\",[]],[15,\"class\",\"row\"],[13],[0,\"\\n    Available Resources\\n\"],[14],[0,\"\\n\"],[11,\"div\",[]],[15,\"class\",\"row\"],[13],[0,\"\\n    Mana:\\n    \"],[11,\"span\",[]],[15,\"class\",\"resource-badge\"],[13],[1,[26,[\"mana\"]],false],[14],[0,\"\\n\"],[14],[0,\"\\n\"],[11,\"div\",[]],[15,\"class\",\"row\"],[13],[0,\"\\n    Action Points:\\n    \"],[11,\"span\",[]],[15,\"class\",\"resource-badge\"],[13],[1,[26,[\"actions\"]],false],[14],[0,\"\\n\"],[14]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "hex-card-battle/components/player-section/resource-display/template.hbs" } });
});
define("hex-card-battle/components/player-section/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "Aiab1pNy", "block": "{\"statements\":[[6,[\"flyout-panel\"],null,[[\"title\",\"position\"],[\"Player section\",\"bottom-left\"]],{\"statements\":[[0,\"    \"],[11,\"div\",[]],[15,\"class\",\"player-section-content\"],[13],[0,\"\\n        \"],[1,[33,[\"component\"],[[28,[\"player-section\",\"resource-display\"]]],[[\"game\"],[[28,[\"game\"]]]]],false],[0,\"\\n\\n        \"],[11,\"div\",[]],[15,\"class\",\"hand card-row\"],[13],[0,\"\\n\"],[6,[\"each\"],[[28,[\"hand\"]]],null,{\"statements\":[[0,\"                \"],[11,\"div\",[]],[16,\"class\",[34,[\"card-slot \",[28,[\"index\"]]]]],[13],[0,\"\\n                    \"],[1,[33,[\"interactive-card\"],null,[[\"card\"],[[28,[\"card\"]]]]],false],[0,\"\\n                    \"],[11,\"button\",[]],[15,\"class\",\"game-button select-card\"],[5,[\"action\"],[[28,[null]],\"playCard\",[28,[\"card\"]],[28,[\"index\"]]]],[13],[0,\"Play\"],[14],[0,\"\\n                \"],[14],[0,\"\\n\"]],\"locals\":[\"card\",\"index\"]},null],[0,\"        \"],[14],[0,\"\\n\\n        \"],[1,[33,[\"component\"],[[28,[\"player-section\",\"phase-changer\"]]],[[\"game\"],[[28,[\"game\"]]]]],false],[0,\"\\n    \"],[14],[0,\"\\n\"]],\"locals\":[]},null],[0,\"\\n\"],[6,[\"if\"],[[28,[\"showDialogPrompt\"]]],null,{\"statements\":[[6,[\"simple-modal-dialog\"],null,[[\"cancelDialog\"],[[33,[\"action\"],[[28,[null]],[28,[\"cancelDialog\"]]],null]]],{\"statements\":[[0,\"        \"],[1,[33,[\"component\"],[[28,[\"simple-modal-dialog\",\"header\"]]],[[\"label\"],[\"Select Card Option\"]]],false],[0,\"\\n\"],[6,[\"component\"],[[28,[\"simple-modal-dialog\",\"body\"]]],null,{\"statements\":[[0,\"            \"],[11,\"div\",[]],[15,\"class\",\"card-options\"],[13],[0,\"\\n\"],[6,[\"each\"],[[28,[\"selectCardOptions\"]]],null,{\"statements\":[[0,\"                    \"],[11,\"button\",[]],[15,\"class\",\"game-button option\"],[5,[\"action\"],[[28,[null]],[28,[\"chooseCardOption\"]],[28,[\"index\"]]]],[13],[0,\"\\n                        \"],[1,[28,[\"option\"]],false],[0,\"\\n                    \"],[14],[0,\"\\n\"]],\"locals\":[\"option\",\"index\"]},null],[0,\"            \"],[14],[0,\"\\n\"]],\"locals\":[]},null],[0,\"        \"],[1,[33,[\"component\"],[[28,[\"simple-modal-dialog\",\"footer\"]]],[[\"cancelDialog\",\"cancelDialog\"],[\"Cancel\",[33,[\"action\"],[[28,[null]],[28,[\"cancelDialog\"]]],null]]]],false],[0,\"\\n\"]],\"locals\":[]},null]],\"locals\":[]},null]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "hex-card-battle/components/player-section/template.hbs" } });
});
define('hex-card-battle/components/setup-game/component', ['exports', 'hex-card-battle/models/player'], function (exports, _player) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    var Component = Ember.Component,
        computed = Ember.computed;
    exports.default = Component.extend({
        classNames: ['setup-game-component'],

        boardSize: 'medium',
        boardSizeOptions: ['small', 'medium', 'large'],

        boardShape: 'random',
        boardShapeOptions: ['hexagon', 'square', 'random'],

        playerCount: 2,
        playerCountOptions: [2, 3, 4],

        players: computed('playerCount', function () {
            var playerCount = this.get('playerCount');
            var players = [];

            for (var playerNumber = 1; playerNumber <= playerCount; playerNumber++) {
                players.push(this.playerDescription(playerNumber));
            }

            return players;
        }),

        actions: {
            createGame: function createGame() {
                this.sendAction('action', this.getProperties('boardSize', 'boardShape', 'players'));
            }
        },

        playerDescription: function playerDescription(number) {
            if (!this._playerCache) {
                this._playerCache = {};
            }

            if (!this._playerCache.hasOwnProperty(number)) {
                this._playerCache[number] = _player.default.create({
                    number: number,
                    name: 'player ' + number
                });
            }

            return this._playerCache[number];
        }
    });
});
define("hex-card-battle/components/setup-game/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "+DQHeook", "block": "{\"statements\":[[11,\"h3\",[]],[13],[0,\"Setup a new game\"],[14],[0,\"\\n\\n\"],[11,\"div\",[]],[15,\"class\",\"section\"],[13],[0,\"\\n    \"],[11,\"div\",[]],[15,\"class\",\"header\"],[13],[0,\"Board Setup\"],[14],[0,\"\\n\\n    \"],[1,[33,[\"dynamic-select\"],null,[[\"description\",\"contents\",\"selected\",\"action\"],[\"Board Size\",[28,[\"boardSizeOptions\"]],[28,[\"boardSize\"]],[33,[\"action\"],[[28,[null]],[33,[\"mut\"],[[28,[\"boardSize\"]]],null]],null]]]],false],[0,\"\\n\\n    \"],[1,[33,[\"dynamic-select\"],null,[[\"description\",\"contents\",\"selected\",\"action\"],[\"Board Shape\",[28,[\"boardShapeOptions\"]],[28,[\"boardShape\"]],[33,[\"action\"],[[28,[null]],[33,[\"mut\"],[[28,[\"boardShape\"]]],null]],null]]]],false],[0,\"\\n\"],[14],[0,\"\\n\\n\"],[11,\"div\",[]],[15,\"class\",\"section\"],[13],[0,\"\\n    \"],[11,\"div\",[]],[15,\"class\",\"header\"],[13],[0,\"Player Setup\"],[14],[0,\"\\n\\n    \"],[1,[33,[\"dynamic-select\"],null,[[\"description\",\"contents\",\"selected\",\"action\"],[\"Number of players\",[28,[\"playerCountOptions\"]],[28,[\"playerCount\"]],[33,[\"action\"],[[28,[null]],[33,[\"mut\"],[[28,[\"playerCount\"]]],null]],null]]]],false],[0,\"\\n\\n    \"],[11,\"div\",[]],[15,\"class\",\"players\"],[13],[0,\"\\n\"],[6,[\"each\"],[[28,[\"players\"]]],[[\"key\"],[\"@index\"]],{\"statements\":[[0,\"            \"],[11,\"div\",[]],[15,\"class\",\"player-input\"],[13],[0,\"\\n                Player \"],[1,[28,[\"player\",\"playerNumber\"]],false],[0,\":\\n                \"],[1,[33,[\"input\"],null,[[\"type\",\"value\"],[\"text\",[28,[\"player\",\"name\"]]]]],false],[0,\"\\n            \"],[14],[0,\"\\n\"]],\"locals\":[\"player\"]},null],[0,\"    \"],[14],[0,\"\\n\"],[14],[0,\"\\n\\n\"],[11,\"div\",[]],[15,\"class\",\"submit-button\"],[13],[0,\"\\n    \"],[11,\"button\",[]],[15,\"type\",\"button\"],[5,[\"action\"],[[28,[null]],\"createGame\"]],[13],[0,\"\\n\\n        Create Game\\n    \"],[14],[0,\"\\n\"],[14],[0,\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "hex-card-battle/components/setup-game/template.hbs" } });
});
define('hex-card-battle/components/simple-modal-dialog/body/component', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var Component = Ember.Component;
  exports.default = Component.extend({
    classNames: ['SMD-body']
  });
});
define("hex-card-battle/components/simple-modal-dialog/body/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "M1Em+ng4", "block": "{\"statements\":[[18,\"default\"]],\"locals\":[],\"named\":[],\"yields\":[\"default\"],\"hasPartials\":false}", "meta": { "moduleName": "hex-card-battle/components/simple-modal-dialog/body/template.hbs" } });
});
define('hex-card-battle/components/simple-modal-dialog/component', ['exports', 'hex-card-battle/components/simple-modal-dialog/mixins/cancel-modal'], function (exports, _cancelModal) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var Component = Ember.Component;
  exports.default = Component.extend(_cancelModal.default, {
    classNames: ['SMD-simple-modal-dialog'],
    classNameBindings: ['showDismiss:clickable'],

    click: function click(event) {
      if (this.get('showDismiss') && this.isClickOutsideModal(event.target)) {
        this.send('dismiss');
      }
    },
    isClickOutsideModal: function isClickOutsideModal(clickTarget) {
      return $(clickTarget).parents('.SMD-content').length === 0;
    }
  });
});
define('hex-card-battle/components/simple-modal-dialog/footer/component', ['exports', 'hex-card-battle/components/simple-modal-dialog/mixins/cancel-modal', 'hex-card-battle/components/simple-modal-dialog/mixins/acknowledge-modal'], function (exports, _cancelModal, _acknowledgeModal) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var Component = Ember.Component;
  exports.default = Component.extend(_cancelModal.default, _acknowledgeModal.default, {
    classNames: ['SMD-footer'],
    cancelText: 'Cancel',
    acknowledgeText: 'Okay'
  });
});
define("hex-card-battle/components/simple-modal-dialog/footer/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "PrFVDrxv", "block": "{\"statements\":[[6,[\"if\"],[[28,[\"showDismiss\"]]],null,{\"statements\":[[0,\"    \"],[11,\"button\",[]],[15,\"type\",\"button\"],[15,\"class\",\"SMD-button dismiss\"],[5,[\"action\"],[[28,[null]],\"dismiss\"]],[13],[0,\"\\n        \"],[1,[26,[\"cancelText\"]],false],[0,\"\\n    \"],[14],[0,\"\\n\"]],\"locals\":[]},null],[6,[\"if\"],[[28,[\"showAcknowledge\"]]],null,{\"statements\":[[0,\"    \"],[11,\"button\",[]],[15,\"type\",\"button\"],[15,\"class\",\"SMD-button acknowledge\"],[5,[\"action\"],[[28,[null]],\"acknowledge\"]],[13],[0,\"\\n        \"],[1,[26,[\"acknowledgeText\"]],false],[0,\"\\n    \"],[14],[0,\"\\n\"]],\"locals\":[]},null]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "hex-card-battle/components/simple-modal-dialog/footer/template.hbs" } });
});
define('hex-card-battle/components/simple-modal-dialog/header/component', ['exports', 'hex-card-battle/components/simple-modal-dialog/mixins/cancel-modal'], function (exports, _cancelModal) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var Component = Ember.Component;
  exports.default = Component.extend(_cancelModal.default, {
    classNames: ['SMD-header'],
    label: ""
  });
});
define("hex-card-battle/components/simple-modal-dialog/header/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "s5aa7xNc", "block": "{\"statements\":[[11,\"span\",[]],[15,\"class\",\"title-text\"],[13],[0,\"\\n\"],[6,[\"if\"],[[29,\"default\"]],null,{\"statements\":[[0,\"        \"],[18,\"default\"],[0,\"\\n\"]],\"locals\":[]},{\"statements\":[[0,\"        \"],[1,[26,[\"label\"]],false],[0,\"\\n\"]],\"locals\":[]}],[14],[0,\"\\n\"],[6,[\"if\"],[[28,[\"showDismiss\"]]],null,{\"statements\":[[0,\"    \"],[11,\"button\",[]],[15,\"type\",\"button\"],[15,\"class\",\"SMD-button dismiss\"],[5,[\"action\"],[[28,[null]],\"dismiss\"]],[13],[0,\"\\n        \"],[11,\"i\",[]],[15,\"class\",\"icon close\"],[13],[14],[0,\"\\n    \"],[14],[0,\"\\n\"]],\"locals\":[]},null]],\"locals\":[],\"named\":[],\"yields\":[\"default\"],\"hasPartials\":false}", "meta": { "moduleName": "hex-card-battle/components/simple-modal-dialog/header/template.hbs" } });
});
define('hex-card-battle/components/simple-modal-dialog/mixins/acknowledge-modal', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    var computed = Ember.computed,
        Mixin = Ember.Mixin;
    exports.default = Mixin.create({
        showAcknowledge: computed('acknowledgeDialog', function () {
            return typeof this.attrs.acknowledgeDialog === 'function';
        }),

        actions: {
            acknowledge: function acknowledge() {
                this.attrs.acknowledgeDialog();
            }
        }
    });
});
define('hex-card-battle/components/simple-modal-dialog/mixins/cancel-modal', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    var computed = Ember.computed,
        Mixin = Ember.Mixin;
    exports.default = Mixin.create({
        showDismiss: computed('cancelDialog', function () {
            return typeof this.attrs.cancelDialog === 'function';
        }),

        actions: {
            dismiss: function dismiss() {
                this.attrs.cancelDialog();
            }
        }
    });
});
define("hex-card-battle/components/simple-modal-dialog/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "YxKE3Rf3", "block": "{\"statements\":[[11,\"div\",[]],[15,\"class\",\"SMD-screen-overlay\"],[13],[0,\"\\n    \"],[11,\"div\",[]],[15,\"class\",\"SMD-modal-positional-wrapper\"],[13],[0,\"\\n        \"],[11,\"div\",[]],[15,\"class\",\"SMD-content\"],[13],[0,\"\\n            \"],[18,\"default\"],[0,\"\\n        \"],[14],[0,\"\\n    \"],[14],[0,\"\\n\"],[14],[0,\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[\"default\"],\"hasPartials\":false}", "meta": { "moduleName": "hex-card-battle/components/simple-modal-dialog/template.hbs" } });
});
define('hex-card-battle/components/turn-change-display/component', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    var Component = Ember.Component,
        computed = Ember.computed;
    exports.default = Component.extend({
        classNameBindings: [':turn-change-display'],

        game: null,

        phase: computed.alias('game.phase'),
        gamePhase: computed.alias('phase.gamePhase'),
        activePlayer: computed.alias('phase.activePlayer'),
        turn: computed.alias('phase.turn'),

        isGameStart: computed.equal('gamePhase', 'gameStart'),
        isTurnStart: computed.equal('gamePhase', 'turnStart')
    });
});
define("hex-card-battle/components/turn-change-display/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "1OanrmDb", "block": "{\"statements\":[[6,[\"if\"],[[28,[\"isGameStart\"]]],null,{\"statements\":[[6,[\"simple-modal-dialog\"],null,null,{\"statements\":[[0,\"        \"],[1,[33,[\"component\"],[[28,[\"simple-modal-dialog\",\"header\"]]],[[\"label\"],[\"Beginning of Game\"]]],false],[0,\"\\n        \"],[6,[\"component\"],[[28,[\"simple-modal-dialog\",\"body\"]]],null,{\"statements\":[[0,\"Click Start to begin the game.\"]],\"locals\":[]},null],[0,\"\\n        \"],[1,[33,[\"component\"],[[28,[\"simple-modal-dialog\",\"footer\"]]],[[\"acknowledgeText\",\"acknowledgeDialog\"],[\"Start\",[33,[\"action\"],[[28,[null]],[27,[\"startGame\"]]],null]]]],false],[0,\"\\n\"]],\"locals\":[]},null]],\"locals\":[]},null],[0,\"\\n\"],[6,[\"if\"],[[28,[\"isTurnStart\"]]],null,{\"statements\":[[6,[\"simple-modal-dialog\"],null,null,{\"statements\":[[0,\"        \"],[1,[33,[\"component\"],[[28,[\"simple-modal-dialog\",\"header\"]]],[[\"label\"],[\"Start of Turn\"]]],false],[0,\"\\n        \"],[6,[\"component\"],[[28,[\"simple-modal-dialog\",\"body\"]]],null,{\"statements\":[[0,\"Click Begin to start the turn.\"]],\"locals\":[]},null],[0,\"\\n        \"],[1,[33,[\"component\"],[[28,[\"simple-modal-dialog\",\"footer\"]]],[[\"acknowledgeText\",\"acknowledgeDialog\"],[\"Begin\",[33,[\"action\"],[[28,[null]],[27,[\"startTurn\"]]],null]]]],false],[0,\"\\n\"]],\"locals\":[]},null]],\"locals\":[]},null]],\"locals\":[],\"named\":[\"startTurn\",\"startGame\"],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "hex-card-battle/components/turn-change-display/template.hbs" } });
});
define('hex-card-battle/controllers/array', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Controller;
});
define('hex-card-battle/controllers/object', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Controller;
});
define('hex-card-battle/game/route', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    var inject = Ember.inject,
        Route = Ember.Route;


    var GameRoute = Route.extend({
        store: inject.service(),

        model: function model(params) {
            return this.get('store').lookupById(params.game_id);
        }
    });

    exports.default = GameRoute;
});
define("hex-card-battle/game/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "9Opei3bs", "block": "{\"statements\":[[1,[33,[\"game-board\"],null,[[\"game\"],[[28,[\"model\"]]]]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "hex-card-battle/game/template.hbs" } });
});
define('hex-card-battle/helpers/and', ['exports', 'ember-truth-helpers/helpers/and'], function (exports, _and) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _and.default;
    }
  });
  Object.defineProperty(exports, 'and', {
    enumerable: true,
    get: function () {
      return _and.and;
    }
  });
});
define('hex-card-battle/helpers/app-version', ['exports', 'hex-card-battle/config/environment', 'ember-cli-app-version/utils/regexp'], function (exports, _environment, _regexp) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.appVersion = appVersion;
  function appVersion(_) {
    var hash = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var version = _environment.default.APP.version;
    // e.g. 1.0.0-alpha.1+4jds75hf

    // Allow use of 'hideSha' and 'hideVersion' For backwards compatibility
    var versionOnly = hash.versionOnly || hash.hideSha;
    var shaOnly = hash.shaOnly || hash.hideVersion;

    var match = null;

    if (versionOnly) {
      if (hash.showExtended) {
        match = version.match(_regexp.versionExtendedRegExp); // 1.0.0-alpha.1
      }
      // Fallback to just version
      if (!match) {
        match = version.match(_regexp.versionRegExp); // 1.0.0
      }
    }

    if (shaOnly) {
      match = version.match(_regexp.shaRegExp); // 4jds75hf
    }

    return match ? match[0] : version;
  }

  exports.default = Ember.Helper.helper(appVersion);
});
define('hex-card-battle/helpers/eq', ['exports', 'ember-truth-helpers/helpers/equal'], function (exports, _equal) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _equal.default;
    }
  });
  Object.defineProperty(exports, 'equal', {
    enumerable: true,
    get: function () {
      return _equal.equal;
    }
  });
});
define('hex-card-battle/helpers/gt', ['exports', 'ember-truth-helpers/helpers/gt'], function (exports, _gt) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _gt.default;
    }
  });
  Object.defineProperty(exports, 'gt', {
    enumerable: true,
    get: function () {
      return _gt.gt;
    }
  });
});
define('hex-card-battle/helpers/gte', ['exports', 'ember-truth-helpers/helpers/gte'], function (exports, _gte) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _gte.default;
    }
  });
  Object.defineProperty(exports, 'gte', {
    enumerable: true,
    get: function () {
      return _gte.gte;
    }
  });
});
define('hex-card-battle/helpers/is-array', ['exports', 'ember-truth-helpers/helpers/is-array'], function (exports, _isArray) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _isArray.default;
    }
  });
  Object.defineProperty(exports, 'isArray', {
    enumerable: true,
    get: function () {
      return _isArray.isArray;
    }
  });
});
define('hex-card-battle/helpers/is-empty', ['exports', 'ember-truth-helpers/helpers/is-empty'], function (exports, _isEmpty) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _isEmpty.default;
    }
  });
});
define('hex-card-battle/helpers/is-equal', ['exports', 'ember-truth-helpers/helpers/is-equal'], function (exports, _isEqual) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _isEqual.default;
    }
  });
  Object.defineProperty(exports, 'isEqual', {
    enumerable: true,
    get: function () {
      return _isEqual.isEqual;
    }
  });
});
define('hex-card-battle/helpers/lt', ['exports', 'ember-truth-helpers/helpers/lt'], function (exports, _lt) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _lt.default;
    }
  });
  Object.defineProperty(exports, 'lt', {
    enumerable: true,
    get: function () {
      return _lt.lt;
    }
  });
});
define('hex-card-battle/helpers/lte', ['exports', 'ember-truth-helpers/helpers/lte'], function (exports, _lte) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _lte.default;
    }
  });
  Object.defineProperty(exports, 'lte', {
    enumerable: true,
    get: function () {
      return _lte.lte;
    }
  });
});
define('hex-card-battle/helpers/not-eq', ['exports', 'ember-truth-helpers/helpers/not-equal'], function (exports, _notEqual) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _notEqual.default;
    }
  });
  Object.defineProperty(exports, 'notEq', {
    enumerable: true,
    get: function () {
      return _notEqual.notEq;
    }
  });
});
define('hex-card-battle/helpers/not', ['exports', 'ember-truth-helpers/helpers/not'], function (exports, _not) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _not.default;
    }
  });
  Object.defineProperty(exports, 'not', {
    enumerable: true,
    get: function () {
      return _not.not;
    }
  });
});
define('hex-card-battle/helpers/or', ['exports', 'ember-truth-helpers/helpers/or'], function (exports, _or) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _or.default;
    }
  });
  Object.defineProperty(exports, 'or', {
    enumerable: true,
    get: function () {
      return _or.or;
    }
  });
});
define('hex-card-battle/helpers/xor', ['exports', 'ember-truth-helpers/helpers/xor'], function (exports, _xor) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _xor.default;
    }
  });
  Object.defineProperty(exports, 'xor', {
    enumerable: true,
    get: function () {
      return _xor.xor;
    }
  });
});
define("hex-card-battle/index/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "v1ADMDi2", "block": "{\"statements\":[[11,\"h3\",[]],[13],[0,\"\\n    Select Game\\n\"],[14],[0,\"\\n\"],[11,\"ul\",[]],[13],[0,\"\\n    \"],[11,\"li\",[]],[13],[6,[\"link-to\"],[\"new-game\"],null,{\"statements\":[[0,\"setup new game\"]],\"locals\":[]},null],[14],[0,\"\\n    \"],[11,\"li\",[]],[13],[6,[\"link-to\"],[\"game\",1],null,{\"statements\":[[0,\"game 1\"]],\"locals\":[]},null],[14],[0,\"\\n    \"],[11,\"li\",[]],[13],[6,[\"link-to\"],[\"game\",2],null,{\"statements\":[[0,\"game 2\"]],\"locals\":[]},null],[14],[0,\"\\n\"],[14]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "hex-card-battle/index/template.hbs" } });
});
define('hex-card-battle/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'hex-card-battle/config/environment'], function (exports, _initializerFactory, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var name = void 0,
      version = void 0;
  if (_environment.default.APP) {
    name = _environment.default.APP.name;
    version = _environment.default.APP.version;
  }

  exports.default = {
    name: 'App Version',
    initialize: (0, _initializerFactory.default)(name, version)
  };
});
define('hex-card-battle/initializers/container-debug-adapter', ['exports', 'ember-resolver/resolvers/classic/container-debug-adapter'], function (exports, _containerDebugAdapter) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'container-debug-adapter',

    initialize: function initialize() {
      var app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
define('hex-card-battle/initializers/export-application-global', ['exports', 'hex-card-battle/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.initialize = initialize;
  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_environment.default.exportApplicationGlobal !== false) {
      var theGlobal;
      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _environment.default.exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = Ember.String.classify(_environment.default.modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  exports.default = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define('hex-card-battle/models/board', ['exports', 'hex-card-battle/models/model-base'], function (exports, _modelBase) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = _modelBase.default.extend({
        grid: null,

        lookupHex: function lookupHex(_ref) {
            var x = _ref.x,
                y = _ref.y,
                z = _ref.z;

            var col = x + (z + (z & 1)) / 2;
            var row = z;
            var grid = this.get('grid');

            if (grid && grid.hasOwnProperty(row)) {
                return grid[row][col];
            }

            return null;
        }
    });
});
define('hex-card-battle/models/card', ['exports', 'hex-card-battle/models/model-base'], function (exports, _modelBase) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    var computed = Ember.computed;
    exports.default = _modelBase.default.extend({
        name: '',
        art: '',
        mechanics: '',
        displayText: '',

        abilities: computed('displayText', function () {
            var text = this.get('displayText');

            if (typeof text === 'string') {
                return [text];
            } else {
                return text;
            }
        })
    });
});
define('hex-card-battle/models/cube-coord', ['exports', 'hex-card-battle/models/model-base'], function (exports, _modelBase) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    var assert = Ember.assert;


    // This class encapsulates a hex grid coordinate system and its associated
    // calculations. This system borrows heavily from the one defined here:
    //      http://www.redblobgames.com/grids/hexagons/
    var CubeCoord = _modelBase.default.extend({
        x: 0,
        y: 0,
        z: 0,

        adjacentCoords: function adjacentCoords() {
            var x = this.get('x');
            var y = this.get('y');
            var z = this.get('z');

            return [CubeCoord.fromCube(x - 1, y + 1, z), CubeCoord.fromCube(x + 1, y - 1, z), CubeCoord.fromCube(x, y - 1, z + 1), CubeCoord.fromCube(x, y + 1, z - 1), CubeCoord.fromCube(x + 1, y, z - 1), CubeCoord.fromCube(x - 1, y, z + 1)];
        },
        distanceFrom: function distanceFrom(other) {
            var dx = Math.abs(this.get('x') - other.get('x'));
            var dy = Math.abs(this.get('y') - other.get('y'));
            var dz = Math.abs(this.get('z') - other.get('z'));

            var manhattanDistance = dx + dy + dz;

            return manhattanDistance / 2;
        }
    });

    CubeCoord.reopenClass({
        fromRowCol: function fromRowCol(row, col) {
            var x = col - (row + (row & 1)) / 2;
            var z = row;
            var y = -x - z;

            return CubeCoord.create({ x: x, y: y, z: z });
        },
        fromCube: function fromCube(x, y, z) {
            assert("x + y + z must equal 0", x + y + z === 0);
            return CubeCoord.create({ x: x, y: y, z: z });
        }
    });

    exports.default = CubeCoord;
});
define('hex-card-battle/models/game', ['exports', 'hex-card-battle/models/model-base'], function (exports, _modelBase) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    var computed = Ember.computed;
    exports.default = _modelBase.default.extend({
        /* Public Properties API */
        id: null,
        board: null,
        players: null,
        activeHex: null,

        drawDeck: null,
        phase: computed(function () {
            return _modelBase.default.create({
                gamePhase: 'gameStart',
                activePlayer: null,
                activePlayerIndex: null,
                turn: 0
            });
        }),
        cardMarketCards: computed(function () {
            return [];
        }),

        /* Public Function API */
        clickHex: function clickHex(hex) {
            var active = this.get('activeHex');
            if (active !== hex) {
                this.deactivateHex(active);
                this.activateHex(hex);
                this.set('activeHex', hex);
            } else {
                this.deactivateHex(hex);
                this.set('activeHex', null);
            }
        },
        activateHex: function activateHex(hex) {
            var _this = this;

            if (hex) {
                hex.set('state', 'active');
                hex.coord.adjacentCoords().forEach(function (coord) {
                    var adjacentHex = _this.board.lookupHex(coord);
                    if (adjacentHex) {
                        adjacentHex.set('state', 'secondary');
                    }
                });
            }
        },
        deactivateHex: function deactivateHex(hex) {
            var _this2 = this;

            if (hex) {
                hex.set('state', null);
                hex.coord.adjacentCoords().forEach(function (coord) {
                    var adjacentHex = _this2.board.lookupHex(coord);
                    if (adjacentHex) {
                        adjacentHex.set('state', null);
                    }
                });
            }
        },
        lookupHex: function lookupHex(coord) {
            return this.board.lookupHex(coord);
        }
    });
});
define('hex-card-battle/models/model-base', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Object.extend({
        isGameModel: true
    });
});
define('hex-card-battle/models/player', ['exports', 'hex-card-battle/models/model-base', 'hex-card-battle/utils/ramda'], function (exports, _modelBase, _ramda) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    var computed = Ember.computed;
    exports.default = _modelBase.default.extend({
        name: computed(function () {
            return '';
        }),
        number: computed(function () {
            return '';
        }),

        hand: computed(function () {
            return [];
        }),
        deck: computed(function () {
            return [];
        }),
        discard: computed(function () {
            return [];
        }),

        refillHand: function refillHand() {
            while (this.get('hand.length') < 5) {
                var empty = this.drawCard();
                if (empty) {
                    break;
                }
            }
        },
        resetResources: function resetResources() {
            this.set('resources', _modelBase.default.create({
                actions: 0,
                mana: 0
            }));
        },
        drawCard: function drawCard() {
            var deck = this.get('deck');
            var discard = this.get('discard');
            var hand = this.get('hand');

            if (deck.get('length') === 0) {
                if (discard.get('length') === 0) {
                    return true;
                } else {
                    this.refreshDeck();
                }
            }

            hand.pushObject(deck.popObject());
        },
        discardCard: function discardCard(index) {
            var hand = this.get('hand');
            var discard = this.get('discard');

            var card = hand.get(index);
            hand.removeObject(card);
            discard.pushObject(card);
        },
        refreshDeck: function refreshDeck() {
            var deck = this.get('deck');
            var discard = this.get('discard');

            deck.pushObjects(discard);
            this.set('deck', (0, _ramda.shuffle)(deck));
            this.set('discard', []);
        }
    });
});
define('hex-card-battle/new-game/route', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    var inject = Ember.inject,
        Route = Ember.Route;
    exports.default = Route.extend({
        store: inject.service(),

        actions: {
            createGame: function createGame(description) {
                this.transitionTo('game', this.get('store').newGame(description));
            }
        }
    });
});
define("hex-card-battle/new-game/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "6sDj1Cp9", "block": "{\"statements\":[[1,[33,[\"setup-game\"],null,[[\"action\"],[\"createGame\"]]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "hex-card-battle/new-game/template.hbs" } });
});
define('hex-card-battle/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberResolver.default;
});
define('hex-card-battle/router', ['exports', 'hex-card-battle/config/environment'], function (exports, _environment) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    var Router = Ember.Router;


    var AppRouter = Router.extend({ location: _environment.default.locationType });
    AppRouter.map(function () {
        this.route('game', {
            path: '/game/:game_id'
        });
        this.route('new-game');
    });

    exports.default = AppRouter;
});
define('hex-card-battle/services/debug', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    var Service = Ember.Service;
    exports.default = Service.extend({
        showVisualDebugInfo: false
    });
});
define('hex-card-battle/services/store', ['exports', 'hex-card-battle/models/game', 'hex-card-battle/models/player', 'hex-card-battle/utils/guid', 'hex-card-battle/utils/board-generator', 'hex-card-battle/utils/deck-generator', 'hex-card-battle/utils/ramda'], function (exports, _game, _player, _guid, _boardGenerator, _deckGenerator, _ramda) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    var Service = Ember.Service;


    var sizes = {
        square: {
            small: 10,
            medium: 20,
            large: 40
        },
        hexagon: {
            small: 11,
            medium: 23,
            large: 47
        },
        random: {
            small: 11,
            medium: 22,
            large: 44
        }
    };

    exports.default = Service.extend({
        lookupById: function lookupById(id) {
            return this.newGame({
                id: id,
                boardSize: 'medium',
                boardShape: 'random',
                players: [_player.default.create({ number: 1, name: 'player 1' }), _player.default.create({ number: 2, name: 'player 2' })]
            });
        },
        newGame: function newGame(_ref) {
            var boardSize = _ref.boardSize,
                boardShape = _ref.boardShape,
                players = _ref.players,
                id = _ref.id;

            id = id || (0, _guid.default)();

            var width = sizes[boardShape][boardSize] || 10;
            var board = _boardGenerator.default.generate(width, boardShape);
            var drawDeck = (0, _ramda.shuffle)(_deckGenerator.default.newDrawDeck());

            players.forEach(function (player) {
                player.set('deck', _deckGenerator.default.startingDeck());
                player.resetResources();
            });

            return _game.default.create({ id: id, players: players, board: board, drawDeck: drawDeck });
        }
    });
});
define("hex-card-battle/templates/application", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "Zn6m5oNJ", "block": "{\"statements\":[[1,[26,[\"outlet\"]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "hex-card-battle/templates/application.hbs" } });
});
define('hex-card-battle/utils/board-generator', ['exports', 'hex-card-battle/models/model-base', 'hex-card-battle/models/board', 'hex-card-battle/models/cube-coord', 'hex-card-battle/utils/rand'], function (exports, _modelBase, _board, _cubeCoord, _rand) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = {
        generate: function generate(width, shape) {
            var board = _board.default.create({
                grid: this.emptyGrid(width)
            });

            if (shape === 'square') {
                this.fillSquareBoard(board);
            } else if (shape === 'hexagon') {
                this.fillHexBoard(board);
            } else if (shape === 'random') {
                this.fillRandomBoard(board);
            }

            return board;
        },
        emptyGrid: function emptyGrid(width) {
            var type = 'empty';
            var grid = Ember.A([]);

            for (var h = 0; h < width; h++) {
                var row = Ember.A([]);

                for (var w = 0; w < width; w++) {
                    row.pushObject(_modelBase.default.create({ type: type }));
                }

                grid.pushObject(row);
            }

            this.setCubeCoords(grid);
            return grid;
        },
        setCubeCoords: function setCubeCoords(grid) {
            for (var row = 0; row < grid.length; row++) {
                for (var col = 0; col < grid[row].length; col++) {
                    grid[row][col].set('coord', _cubeCoord.default.fromRowCol(row, col));
                }
            }
        },
        fillSquareBoard: function fillSquareBoard(board) {
            var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'forest';

            board.get('grid').forEach(function (row) {
                return row.forEach(function (hex) {
                    hex.set('type', type);
                });
            });
        },
        fillHexBoard: function fillHexBoard(board) {
            var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'forest';

            var grid = board.get('grid');
            var width = Math.min(grid.length, grid[0].length);
            var size = (width + 1) / 2;
            var midPoint = Math.floor(width / 2);

            var middle = grid[midPoint][midPoint].get('coord');

            grid.forEach(function (row) {
                return row.forEach(function (hex) {
                    if (middle.distanceFrom(hex.get('coord')) < size) {
                        hex.set('type', type);
                    }
                });
            });
        },
        fillRandomBoard: function fillRandomBoard(board) {
            this.randomizeHexes(board);
            this.eliminateIsolatedIslands(board);
            this.eliminateIsolatedEmptyZones(board);
            this.randomizeLake(board);
            this.addPrimaryResourceNodes(board);
            this.addSecondaryResourceNodes(board);
        },
        randomizeHexes: function randomizeHexes(board) {
            var grid = board.get('grid');
            var width = Math.min(grid.length, grid[0].length);
            var midPoint = Math.floor(width / 2);
            var breakOverThreshold = midPoint * 0.5;

            var middle = grid[midPoint][midPoint].get('coord');
            var max = middle.distanceFrom(grid[0][0].get('coord'));

            grid.forEach(function (row) {
                return row.forEach(function (hex) {
                    hex.set('type', 'forest');

                    var distance = middle.distanceFrom(hex.get('coord'));

                    if (distance > breakOverThreshold) {
                        var breakOverWeight = (distance - breakOverThreshold) / (max - breakOverThreshold);

                        if (Math.random() < breakOverWeight) {
                            hex.set('type', 'empty');
                        }
                    }
                });
            });
        },
        eliminateIsolatedIslands: function eliminateIsolatedIslands(board) {
            var grid = board.get('grid');
            var width = Math.min(grid.length, grid[0].length);
            var midPoint = Math.floor(width / 2);
            var middle = grid[midPoint][midPoint];
            var queue = [middle];
            middle.mainland = true;

            while (queue.length > 0) {
                var hex = queue.shift();

                hex.coord.adjacentCoords().forEach(function (coord) {
                    var neighbor = board.lookupHex(coord);
                    if (neighbor && neighbor.type !== 'empty' && !neighbor.mainland) {
                        neighbor.mainland = true;
                        queue.push(neighbor);
                    }
                });
            }

            grid.forEach(function (row) {
                return row.forEach(function (hex) {
                    if (!hex.mainland) {
                        hex.set('type', 'empty');
                    }

                    delete hex.mainland;
                });
            });
        },
        eliminateIsolatedEmptyZones: function eliminateIsolatedEmptyZones(board) {
            var grid = board.get('grid');
            var queue = [];
            var hexChecker = function hexChecker(hex) {
                if (hex && hex.type === 'empty' && !hex.mainempty) {
                    hex.mainempty = true;
                    queue.push(hex);
                }
            };

            grid.get('firstObject').forEach(hexChecker);
            grid.get('lastObject').forEach(hexChecker);
            grid.forEach(function (row) {
                hexChecker(row.get('firstObject'));
                hexChecker(row.get('lastObject'));
            });

            while (queue.length > 0) {
                var hex = queue.shift();

                hex.coord.adjacentCoords().forEach(function (coord) {
                    hexChecker(board.lookupHex(coord));
                });
            }

            grid.forEach(function (row) {
                return row.forEach(function (hex) {
                    if (!hex.mainempty && hex.type === 'empty') {
                        hex.set('type', 'lake');
                    }

                    delete hex.mainempty;
                });
            });
        },
        randomizeLake: function randomizeLake(board) {
            var _this = this;

            var queue = [];
            var grid = board.get('grid');
            var stepDown = this.probabilityStepDown(grid);
            var lakeSeed = this.getRandomCentralHex(grid);

            lakeSeed.probability = 1;
            queue.push(lakeSeed);

            while (queue.length > 0) {
                var hex = queue.shift();

                if (_rand.default.bool(hex.probability)) {
                    (function () {
                        hex.set('type', 'lake');
                        var propagationProbability = hex.probability - stepDown;

                        if (propagationProbability > 0) {
                            hex.coord.adjacentCoords().forEach(function (coord) {
                                var adjacentHex = board.lookupHex(coord);

                                if (adjacentHex && adjacentHex.type !== 'empty' && !adjacentHex.probability) {
                                    adjacentHex.probability = propagationProbability;
                                    queue.push(adjacentHex);
                                }
                            });
                        }
                    })();
                }
            }

            board.grid.forEach(function (row) {
                return row.forEach(function (hex) {
                    delete hex.probability;

                    var neighbors = _this.getNeighbors(hex, board);
                    if (hex.type === 'forest' && _this.countNeighbors(neighbors, 'lake') === 6) {

                        hex.set('type', 'lake');
                    }
                });
            });
        },
        getRandomCentralHex: function getRandomCentralHex(grid) {
            var size = Math.min(grid.length, grid[0].length);

            var midPoint = Math.floor(size / 2);
            var range = Math.floor(size / 6);

            var minRange = midPoint - range;
            var maxRange = midPoint + range;

            var xRand = _rand.default.range(minRange, maxRange);
            var yRand = _rand.default.range(minRange, maxRange);

            return grid[xRand][yRand];
        },
        probabilityStepDown: function probabilityStepDown(grid) {
            var size = Math.min(grid.length, grid[0].length);

            return size >= 40 ? 0.05 : size >= 20 ? 0.1 : 0.2;
        },
        addPrimaryResourceNodes: function addPrimaryResourceNodes(board) {
            var _this2 = this;

            board.get('grid').forEach(function (row) {
                return row.forEach(function (hex) {
                    var neighbors = _this2.getNeighbors(hex, board);

                    if (hex.type === 'forest' && _this2.countNeighbors(neighbors, 'forest') <= 1 && _this2.countNeighbors(neighbors, 'resource-primary') === 0) {

                        hex.set('type', 'resource-primary');
                    }
                });
            });
        },
        addSecondaryResourceNodes: function addSecondaryResourceNodes(board) {
            var _this3 = this;

            board.get('grid').forEach(function (row) {
                return row.forEach(function (hex) {
                    var neighbors = _this3.getNeighbors(hex, board);
                    var forest = _this3.countNeighbors(neighbors, 'forest');
                    var primary = _this3.countNeighbors(neighbors, 'resource-primary');
                    var secondary = _this3.countNeighbors(neighbors, 'resource-secondary');

                    if (hex.type === 'forest' && primary === 0 && secondary === 0 && forest <= 2) {
                        hex.set('type', 'resource-secondary');
                    }
                });
            });
        },
        getNeighbors: function getNeighbors(hex, board) {
            return hex.coord.adjacentCoords().map(function (coord) {
                return board.lookupHex(coord);
            });
        },
        countNeighbors: function countNeighbors(neighbors, type) {
            var count = 0;
            neighbors.forEach(function (hex) {
                if (hex && hex.get('type') === type) {
                    count++;
                }
            });
            return count;
        }
    };
});
define('hex-card-battle/utils/card-definitions', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = {
        ManaGem: {
            name: 'Mana Gem',
            art: 'PLACEHOLDER',
            displayText: "+1 Mana",
            execute: function execute(_ref) {
                var player = _ref.player;

                player.incrementProperty('resources.mana');
            }
        },
        SimpleOrders: {
            name: 'Simple Orders',
            art: 'PLACEHOLDER',
            displayText: "+1 Action point",
            execute: function execute(_ref2) {
                var player = _ref2.player;

                player.incrementProperty('resources.actions');
            }
        },
        MagicalCommand: {
            name: 'Magical Command',
            art: 'PLACEHOLDER',
            mechanics: [{
                type: 'resource-grant',
                resource: 'mana',
                count: 1
            }, {
                type: 'resource-grant',
                resource: 'action',
                count: 1
            }],
            displayText: ["Choose:", "+1 Mana or", "+1 Action point"],
            options: ['+1 Mana', '+1 Action'],
            execute: function execute(_ref3) {
                var player = _ref3.player,
                    option = _ref3.option;

                if (option === 1) {
                    player.incrementProperty('resources.actions');
                } else {
                    player.incrementProperty('resources.mana');
                }
            }
        },
        SummonBasicUnit: {
            name: 'Summon Unit',
            art: 'PLACEHOLDER',
            mechanics: [{
                type: 'summon-unit',
                options: ['squirrel-scout'],
                cost: 3
            }],
            displayText: ["Summon:", "Squirrel Scout"],
            execute: function execute() {}
        }
    };
});
define('hex-card-battle/utils/deck-generator', ['exports', 'hex-card-battle/models/card', 'hex-card-battle/utils/card-definitions', 'hex-card-battle/utils/ramda'], function (exports, _card, _cardDefinitions, _ramda) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _slicedToArray = function () {
        function sliceIterator(arr, i) {
            var _arr = [];
            var _n = true;
            var _d = false;
            var _e = undefined;

            try {
                for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
                    _arr.push(_s.value);

                    if (i && _arr.length === i) break;
                }
            } catch (err) {
                _d = true;
                _e = err;
            } finally {
                try {
                    if (!_n && _i["return"]) _i["return"]();
                } finally {
                    if (_d) throw _e;
                }
            }

            return _arr;
        }

        return function (arr, i) {
            if (Array.isArray(arr)) {
                return arr;
            } else if (Symbol.iterator in Object(arr)) {
                return sliceIterator(arr, i);
            } else {
                throw new TypeError("Invalid attempt to destructure non-iterable instance");
            }
        };
    }();

    var createCardGenerator = function createCardGenerator(cardDef) {
        return function () {
            return _card.default.create(cardDef);
        };
    };

    var Generators = _ramda.default.mapObj(createCardGenerator, _cardDefinitions.default);

    exports.default = {
        startingDeck: function startingDeck() {
            var expandCard = function expandCard(_ref) {
                var _ref2 = _slicedToArray(_ref, 2),
                    cardGen = _ref2[0],
                    count = _ref2[1];

                return _ramda.default.map(cardGen, _ramda.default.range(0, count));
            };
            var nestedDeck = _ramda.default.map(expandCard, [[Generators.ManaGem, 6], [Generators.SimpleOrders, 2], [Generators.MagicalCommand, 1], [Generators.SummonBasicUnit, 1]]);

            return _ramda.default.flatten(nestedDeck);
        },
        newDrawDeck: function newDrawDeck() {
            return [];
        }
    };
});
define('hex-card-battle/utils/guid', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    var s4 = function s4() {
        return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    };

    var s8 = function s8() {
        return s4() + s4();
    };
    var s12 = function s12() {
        return s4() + s8();
    };

    var guid = function guid() {
        return [s8(), s4(), s4(), s12()].join('-');
    };

    exports.default = guid;
});
define('hex-card-battle/utils/ramda', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var _window = window,
      R = _window.R;


  var sort = R.sortBy(R.prop('comparable'));
  var sortable = function sortable(item) {
    return { item: item, comparable: Math.random() };
  };
  var wrap = R.map(sortable);
  var unwrap = R.map(R.prop('item'));

  var shuffle = exports.shuffle = function shuffle(list) {
    return unwrap(sort(wrap(list)));
  };
  exports.default = R;
});
define("hex-card-battle/utils/rand", ["exports"], function (exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    var range = exports.range = function range(max, min) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    var bool = exports.bool = function bool() {
        var weight = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0.5;

        return Math.random() < weight;
    };
});


define('hex-card-battle/config/environment', ['ember'], function(Ember) {
  var prefix = 'hex-card-battle';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

if (!runningTests) {
  require("hex-card-battle/app")["default"].create({"name":"hex-card-battle","version":"0.1.0+57849833"});
}
//# sourceMappingURL=hex-card-battle.map
