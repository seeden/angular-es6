import angular from 'angular';
import './main.less';

export default class Main {
  static $inject = ['$scope', 'user'];

  constructor($scope, user) {
  }

  doThis {
    const { $scope, user } = this.$inject;
  }
}
