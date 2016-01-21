'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.storeInjections = storeInjections;
exports.default = createDirectiveFactory;

var _isFunction = require('lodash/lang/isFunction');

var _isFunction2 = _interopRequireDefault(_isFunction);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LINK_INJECT = ['scope', 'element', 'attrs', 'controller', 'transcludeFn'];

function storeInjections() {
  var $inject = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];
  var instance = arguments[1];
  var args = arguments[2];
  var varName = arguments.length <= 3 || arguments[3] === undefined ? '$inject' : arguments[3];

  var instanceInject = instance[varName] = instance[varName] || {};

  $inject.forEach(function (injectName, index) {
    instanceInject[injectName] = args[index];
  });
}

function createDirectiveFactory(Directive) {
  var factory = function processFactory() {
    var _this = this;

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var instance = new (Function.prototype.bind.apply(Directive, [null].concat(args)))();
    Object.keys(instance).forEach(function (key) {
      instance[key] = instance[key];
    });

    if (instance.link && (0, _isFunction2.default)(instance.link)) {
      (function () {
        var linkOrg = instance.link;
        instance.link = function () {
          for (var _len2 = arguments.length, linkArgs = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            linkArgs[_key2] = arguments[_key2];
          }

          var inst = new (Function.prototype.bind.apply(Directive, [null].concat(args)))();
          // storeInjections(factory.$inject, inst, args);

          // store link
          inst.link = function link() {
            // must be a new function because $inject
            linkOrg.apply(inst, linkArgs);
          };

          storeInjections(LINK_INJECT, inst.link, linkArgs);

          inst.link();
        };
      })();
    }

    if (instance.controller && (0, _isFunction2.default)(instance.controller)) {
      (function () {
        var controllerOrg = instance.controller;
        instance.controller = function () {
          for (var _len3 = arguments.length, controllerArgs = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
            controllerArgs[_key3] = arguments[_key3];
          }

          var inst = new (Function.prototype.bind.apply(Directive, [null].concat(args)))();
          inst.ctrl = _this;
          storeInjections(instance.controller.$inject, inst.ctrl, controllerArgs);

          controllerOrg.apply(inst, controllerArgs);
        };

        instance.controller.$inject = controllerOrg.$inject || ['$scope', '$element', '$attrs'];
      })();
    }

    return instance;
  };

  factory.$inject = Directive.$inject || [];

  return factory;
}