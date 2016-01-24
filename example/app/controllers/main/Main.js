import './main.less';
import { Inject } from 'angular-es6';

export default class Main extends Inject {
  static $inject = ['$scope', 'user'];

  constructor(...args) {
    super(...args);

    this._prepare();
  }

  _prepare() {
    const { $scope, user } = this.$inject;
  }
}
