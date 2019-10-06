'use strict';

define('tasks-fe/tests/app.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | app');

  QUnit.test('adapters/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'adapters/application.js should pass ESLint\n\n');
  });

  QUnit.test('app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint\n\n');
  });

  QUnit.test('components/add-task-form.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/add-task-form.js should pass ESLint\n\n');
  });

  QUnit.test('components/complete-task.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/complete-task.js should pass ESLint\n\n');
  });

  QUnit.test('components/delete-task.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/delete-task.js should pass ESLint\n\n2:8 - \'task\' is defined but never used. (no-unused-vars)');
  });

  QUnit.test('components/task-cell.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/task-cell.js should pass ESLint\n\n');
  });

  QUnit.test('components/tasks-header.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/tasks-header.js should pass ESLint\n\n');
  });

  QUnit.test('components/tasks-summary.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/tasks-summary.js should pass ESLint\n\n');
  });

  QUnit.test('components/tasks.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/tasks.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/task.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/task.js should pass ESLint\n\n');
  });

  QUnit.test('models/task.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/task.js should pass ESLint\n\n');
  });

  QUnit.test('resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass ESLint\n\n');
  });

  QUnit.test('router.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint\n\n');
  });

  QUnit.test('routes/index.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/index.js should pass ESLint\n\n');
  });

  QUnit.test('routes/tasks.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/tasks.js should pass ESLint\n\n');
  });
});
define('tasks-fe/tests/helpers/destroy-app', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = destroyApp;
  function destroyApp(application) {
    Ember.run(application, 'destroy');
  }
});
define('tasks-fe/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'tasks-fe/tests/helpers/start-app', 'tasks-fe/tests/helpers/destroy-app'], function (exports, _qunit, _startApp, _destroyApp) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  exports.default = function (name) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _startApp.default)();

        if (options.beforeEach) {
          return options.beforeEach.apply(this, arguments);
        }
      },
      afterEach: function afterEach() {
        var _this = this;

        var afterEach = options.afterEach && options.afterEach.apply(this, arguments);
        return Ember.RSVP.resolve(afterEach).then(function () {
          return (0, _destroyApp.default)(_this.application);
        });
      }
    });
  };
});
define('tasks-fe/tests/helpers/start-app', ['exports', 'tasks-fe/app', 'tasks-fe/config/environment'], function (exports, _app, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = startApp;
  function startApp(attrs) {
    var attributes = Ember.merge({}, _environment.default.APP);
    attributes.autoboot = true;
    attributes = Ember.merge(attributes, attrs); // use defaults, but you can override;

    return Ember.run(function () {
      var application = _app.default.create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
      return application;
    });
  }
});
define('tasks-fe/tests/integration/components/complete-task-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('complete-task', 'Integration | Component | complete task', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "do9LtNUn",
      "block": "{\"symbols\":[],\"statements\":[[1,[18,\"complete-task\"],false]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      "id": "2NT68nSj",
      "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"complete-task\",null,null,{\"statements\":[[0,\"      template block text\\n\"]],\"parameters\":[]},null],[0,\"  \"]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('tasks-fe/tests/integration/components/delete-task-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('delete-task', 'Integration | Component | delete task', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "bK7qyJUp",
      "block": "{\"symbols\":[],\"statements\":[[1,[18,\"delete-task\"],false]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      "id": "jCmOMmhh",
      "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"delete-task\",null,null,{\"statements\":[[0,\"      template block text\\n\"]],\"parameters\":[]},null],[0,\"  \"]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('tasks-fe/tests/integration/components/task-cell-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('task-cell', 'Integration | Component | task cell', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "xUcQWU0L",
      "block": "{\"symbols\":[],\"statements\":[[1,[18,\"task-cell\"],false]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      "id": "+Rs3fUU1",
      "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"task-cell\",null,null,{\"statements\":[[0,\"      template block text\\n\"]],\"parameters\":[]},null],[0,\"  \"]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('tasks-fe/tests/integration/components/tasks-header-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('tasks-header', 'Integration | Component | tasks header', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "4N2IzQrU",
      "block": "{\"symbols\":[],\"statements\":[[1,[18,\"tasks-header\"],false]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      "id": "LSIl0VTx",
      "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"tasks-header\",null,null,{\"statements\":[[0,\"      template block text\\n\"]],\"parameters\":[]},null],[0,\"  \"]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('tasks-fe/tests/integration/components/tasks-summary-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('tasks-summary', 'Integration | Component | tasks summary', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "rrVkSVKz",
      "block": "{\"symbols\":[],\"statements\":[[1,[18,\"tasks-summary\"],false]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      "id": "Ht7kkKAP",
      "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"tasks-summary\",null,null,{\"statements\":[[0,\"      template block text\\n\"]],\"parameters\":[]},null],[0,\"  \"]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('tasks-fe/tests/test-helper', ['tasks-fe/app', 'tasks-fe/config/environment', '@ember/test-helpers', 'ember-qunit'], function (_app, _environment, _testHelpers, _emberQunit) {
  'use strict';

  (0, _testHelpers.setApplication)(_app.default.create(_environment.default.APP));

  (0, _emberQunit.start)();
});
define('tasks-fe/tests/tests.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | tests');

  QUnit.test('helpers/destroy-app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/module-for-acceptance.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/start-app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/complete-task-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/complete-task-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/delete-task-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/delete-task-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/task-cell-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/task-cell-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/tasks-header-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/tasks-header-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/tasks-summary-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/tasks-summary-test.js should pass ESLint\n\n');
  });

  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint\n\n');
  });

  QUnit.test('unit/adapters/application-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/adapters/application-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/task-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/task-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/task-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/task-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/index-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/index-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/tasks-list-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/tasks-list-test.js should pass ESLint\n\n');
  });
});
define('tasks-fe/tests/unit/adapters/application-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('adapter:application', 'Unit | Adapter | application', {
    // Specify the other units that are required for this test.
    // needs: ['serializer:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var adapter = this.subject();
    assert.ok(adapter);
  });
});
define('tasks-fe/tests/unit/controllers/task-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:task', 'Unit | Controller | task', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('tasks-fe/tests/unit/models/task-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('task', 'Unit | Model | task', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
  });
});
define('tasks-fe/tests/unit/routes/index-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:index', 'Unit | Route | index', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('tasks-fe/tests/unit/routes/tasks-list-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:tasks-list', 'Unit | Route | tasks list', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
require('tasks-fe/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
