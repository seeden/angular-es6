'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _createDirectiveFactory = require('./createDirectiveFactory');

var Inject = (function () {
  _createClass(Inject, null, [{
    key: '$inject',
    value: [],
    enumerable: true
  }]);

  function Inject() {
    _classCallCheck(this, Inject);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    (0, _createDirectiveFactory.storeInjections)(this.constructor.$inject, this, args);
  }

  return Inject;
})();

exports['default'] = Inject;
module.exports = exports['default'];