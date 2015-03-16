import angular from 'angular';
import css from './main.less';

export default class MainController {
	constructor($scope, user) {
		this.$scope = $scope;

		$scope.user = user;
	}
}

MainController.$inject = ['$scope', 'user'];