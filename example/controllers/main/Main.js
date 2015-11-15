import angular from 'angular';
import './main.less';
import { Inject } from 'angular-es6';

export default class Main extends Inject {
  static $inject = ['$scope', 'user'];

  doThis {
    const { $scope, user } = this.$inject;
  }
}
