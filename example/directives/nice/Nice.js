import template from './nice.html';
import { Inject } from 'angular-es6';

export default class Nice extends Inject {
  static $inject = ['$http'];

  constructor(...args) {
    super(...args);

    this.template = template;
    this.restrict = 'E';
  }

  link(sscope) {
    const { $http } = this.$inject;

    element.text('NICE!!!');
  }
}
