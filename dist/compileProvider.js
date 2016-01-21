'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = compileProvider;
exports.register = register;
var directives = {};
var compileProviderInstance = null;

function compileProvider($compileProvider) {
  compileProviderInstance = $compileProvider;

  Object.keys(directives).forEach(function (name) {
    var directive = directives[name];
    compileProviderInstance.directive(name, directive);
  });

  directives = {};
}

function register(name, directive) {
  if (!compileProviderInstance) {
    directives[name] = directive;
    return;
  }

  compileProviderInstance.directive(name, directive);
}

compileProvider.$inject = ['$compileProvider'];