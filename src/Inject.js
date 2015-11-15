import { storeInjections } from './createDirectiveFactory';

export default class Inject {
  static $inject = [];

  constructor(...args) {
    storeInjections(this.constructor.$inject, this, args);
  }
}
