import template from './nice.html';
import { Inject } from 'angular-es6';

export default class Nice extends Inject {
  static $inject = ['$http'];

  constructor(...args) {
    super(...args);

    this.template = template;
    this.restrict = 'E';
  }

  link(scope) {
    const { $http } = this.$inject;

    scope.onClick = () => this.onClick();
    scope.text = 'Directives are working';
  }

  onClick() {
    const { scope } = this.link.$inject;

    scope.text = 'Directives events are working too';
  }
}
