import isFunction from 'lodash/isFunction';

const LINK_INJECT = ['scope', 'element', 'attrs', 'controller', 'transcludeFn'];

export function storeInjections($inject = [], instance = {}, args, varName = '$inject') {
  const instanceInject = instance[varName] = instance[varName] || {};

  $inject.forEach((injectName, index) => {
    instanceInject[injectName] = args[index];
  });
}

export default function createDirectiveFactory(Directive) {
  const factory = function processFactory(...args) {
    const instance = new Directive(...args);
    Object.keys(instance).forEach((key) => {
      instance[key] = instance[key];
    });

    // isolate scope of the directive
    if (typeof instance.scope === 'undefined') {
      instance.scope = {};
    }

    if (instance.link && isFunction(instance.link)) {
      const linkOrg = instance.link;
      instance.link = (...linkArgs) => {
        const inst = new Directive(...args);
        // storeInjections(factory.$inject, inst, args);

        // store link
        inst.link = function link() { // must be a new function because $inject
          linkOrg.apply(inst, linkArgs);
        };

        storeInjections(LINK_INJECT, inst.link, linkArgs);

        inst.link();
      };
    }

    if (instance.controller && isFunction(instance.controller)) {
      const controllerOrg = instance.controller;
      instance.controller = (...controllerArgs) => {
        const inst = new Directive(...args);
        inst.ctrl = this;
        storeInjections(instance.controller.$inject, inst.ctrl, controllerArgs);

        controllerOrg.apply(inst, controllerArgs);
      };

      instance.controller.$inject = controllerOrg.$inject || ['$scope', '$element', '$attrs'];
    }

    return instance;
  };

  factory.$inject = Directive.$inject || [];

  return factory;
}
