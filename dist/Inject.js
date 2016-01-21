'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createDirectiveFactory = require('./createDirectiveFactory');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Inject = function Inject() {
  _classCallCheck(this, Inject);

  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  (0, _createDirectiveFactory.storeInjections)(this.constructor.$inject, this, args);
};

Inject.$inject = [];
exports.default = Inject;