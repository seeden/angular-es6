'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _get = function get(_x5, _x6, _x7) { var _again = true; _function: while (_again) { var object = _x5, property = _x6, receiver = _x7; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x5 = parent; _x6 = property; _x7 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

exports.directives = directives;
exports.controllers = controllers;
exports.services = services;
exports.factories = factories;
exports.filters = filters;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _lodashStringCapitalize = require('lodash/string/capitalize');

var _lodashStringCapitalize2 = _interopRequireDefault(_lodashStringCapitalize);

var _angular = require('angular');

var _angular2 = _interopRequireDefault(_angular);

var _compileProvider = require('./compileProvider');

var _createDirectiveFactory = require('./createDirectiveFactory');

var _createDirectiveFactory2 = _interopRequireDefault(_createDirectiveFactory);

function firstToLowerCase(str) {
  return str.substr(0, 1).toLowerCase() + str.substr(1);
}

// const req = require.context('./', true, /.*\.js$/);

function directives(req) {
  req.keys().forEach(function (filePath) {
    var parts = filePath.split('/');
    if (parts.length !== 3) {
      return;
    }

    var fileName = _path2['default'].basename(filePath, _path2['default'].extname(filePath));
    var name = parts[1];
    if (!fileName || !name || fileName.toLowerCase() !== name.toLowerCase()) {
      return;
    }

    var Direktive = req(filePath);
    (0, _compileProvider.register)(name, (0, _createDirectiveFactory2['default'])(Direktive));
  });
}

function controllers(req) {
  var moduleName = arguments.length <= 1 || arguments[1] === undefined ? 'controllers' : arguments[1];

  var module = _angular2['default'].module(moduleName, []);

  req.keys().forEach(function (filePath) {
    var parts = filePath.split('/');
    if (parts.length !== 3) {
      return;
    }

    var fileName = _path2['default'].basename(filePath, _path2['default'].extname(filePath));
    var name = parts[1];
    if (!fileName || !name || fileName.toLowerCase() !== name.toLowerCase()) {
      return;
    }

    var Controller = req(filePath);

    var InjectClass = (function (_Controller) {
      _inherits(InjectClass, _Controller);

      function InjectClass() {
        _classCallCheck(this, InjectClass);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        _get(Object.getPrototypeOf(InjectClass.prototype), 'constructor', this).apply(this, args);

        (0, _createDirectiveFactory.storeInjections)(Controller.$inject, this, args);
      }

      return InjectClass;
    })(Controller);

    module.controller((0, _lodashStringCapitalize2['default'])(name), InjectClass);
  });
}

function services(req) {
  var moduleName = arguments.length <= 1 || arguments[1] === undefined ? 'services' : arguments[1];

  var module = _angular2['default'].module(moduleName, []);

  req.keys().forEach(function (filePath) {
    var name = _path2['default'].basename(filePath, _path2['default'].extname(filePath));
    if (name === 'index') {
      return;
    }

    var Service = req(filePath);

    var InjectClass = (function (_Service) {
      _inherits(InjectClass, _Service);

      function InjectClass() {
        _classCallCheck(this, InjectClass);

        for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          args[_key2] = arguments[_key2];
        }

        _get(Object.getPrototypeOf(InjectClass.prototype), 'constructor', this).apply(this, args);

        (0, _createDirectiveFactory.storeInjections)(Service.$inject, this, args);
      }

      return InjectClass;
    })(Service);

    module.service(firstToLowerCase(name), Service);
  });
}

function factories(req) {
  var moduleName = arguments.length <= 1 || arguments[1] === undefined ? 'factories' : arguments[1];

  var module = _angular2['default'].module(moduleName, []);

  req.keys().forEach(function (filePath) {
    var name = _path2['default'].basename(filePath, _path2['default'].extname(filePath));
    if (name === 'index') {
      return;
    }

    module.factory((0, _lodashStringCapitalize2['default'])(name), req(filePath));
  });
}

function filters(req) {
  var moduleName = arguments.length <= 1 || arguments[1] === undefined ? 'filters' : arguments[1];

  var module = _angular2['default'].module(moduleName, []);

  req.keys().forEach(function (filePath) {
    var name = _path2['default'].basename(filePath, _path2['default'].extname(filePath));
    if (name === 'index') {
      return;
    }

    module.filter(name, req(filePath));
  });
}