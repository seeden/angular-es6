import path from 'path';
import angular from 'angular';
import { register } from './compileProvider';
import createDirectiveFactory from './createDirectiveFactory';

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function firstToLowerCase(str) {
  return str.substr(0, 1).toLowerCase() + str.substr(1);
}

// const req = require.context('./', true, /.*\.js$/);
export function directives(req) {
  req.keys().forEach((filePath) => {
    const parts = filePath.split('/');
    if (parts.length !== 3) {
      return;
    }

    const fileName = path.basename(filePath, path.extname(filePath));
    const name = parts[1];
    if (!fileName || !name || fileName.toLowerCase() !== name.toLowerCase()) {
      return;
    }

    const Direktive = req(filePath);
    register(name, createDirectiveFactory(Direktive.default ? Direktive.default : Direktive));
  });
}

export function controllers(req, moduleName = 'controllers') {
  const module = angular.module(moduleName, []);

  req.keys().forEach((filePath) => {
    const parts = filePath.split('/');
    if (parts.length !== 3) {
      return;
    }

    const fileName = path.basename(filePath, path.extname(filePath));
    const name = parts[1];
    if (!fileName || !name || fileName.toLowerCase() !== name.toLowerCase()) {
      return;
    }

    const Controller = req(filePath);
    module.controller(capitalizeFirstLetter(name), Controller.default
      ? Controller.default
      : Controller);
  });
}

export function services(req, moduleName = 'services') {
  const module = angular.module(moduleName, []);

  req.keys().forEach((filePath) => {
    const name = path.basename(filePath, path.extname(filePath));
    if (name === 'index') {
      return;
    }

    const Service = req(filePath);
    module.service(firstToLowerCase(name), Service.default ? Service.default : Service);
  });
}

export function factories(req, moduleName = 'factories') {
  const module = angular.module(moduleName, []);

  req.keys().forEach((filePath) => {
    const name = path.basename(filePath, path.extname(filePath));
    if (name === 'index') {
      return;
    }

    const factory = req(filePath);
    module.factory(capitalizeFirstLetter(name), factory.default ? factory.default : factory);
  });
}

export function filters(req, moduleName = 'filters') {
  const module = angular.module(moduleName, []);

  req.keys().forEach((filePath) => {
    const name = path.basename(filePath, path.extname(filePath));
    if (name === 'index') {
      return;
    }

    const filter = req(filePath);
    module.filter(name, filter.default ? filter.default : filter);
  });
}
