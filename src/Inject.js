import { storeInjections } from './createDirectiveFactory';
import { EventEmitter } from 'events';

export default class Inject extends EventEmitter {
  static $inject = [];

  constructor(...args) {
    super();

    storeInjections(this.constructor.$inject, this, args);
  }
}
