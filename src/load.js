import path from 'path';
import capitalize from 'lodash/string/capitalize';
import angular from 'angular';
import { register } from './compileProvider';
import createDirectiveFactory, { storeInjections } from './createDirectiveFactory';

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
    register(name, createDirectiveFactory(Direktive));
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

    class InjectClass extends Controller {
      constructor(...args) {
        super(...args);

        storeInjections(Controller.$inject, this, args);
      }
    }

    module.controller(capitalize(name), InjectClass);
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

    class InjectClass extends Service {
      constructor(...args) {
        super(...args);

        storeInjections(Service.$inject, this, args);
      }
    }

    module.service(firstToLowerCase(name), Service);
  });
}

export function factories(req, moduleName = 'factories') {
  const module = angular.module(moduleName, []);

  req.keys().forEach((filePath) => {
    const name = path.basename(filePath, path.extname(filePath));
    if (name === 'index') {
      return;
    }

    module.factory(capitalize(name), req(filePath));
  });
}

export function filters(req, moduleName = 'filters') {
  const module = angular.module(moduleName, []);

  req.keys().forEach((filePath) => {
    const name = path.basename(filePath, path.extname(filePath));
    if (name === 'index') {
      return;
    }

    module.filter(name, req(filePath));
  });
}
