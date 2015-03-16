import template from './nice.html';

export default class NiceDirective {
    constructor($http) {
        this.template = template; 
        this.restrict = 'E'; 

        this.$http = $http; 
    } 

    link($scope, element, attrs) { 
        this.$scope = $scope;

        element.text('NICE!!!');
    } 
}

NiceDirective.$inject = ['$http'];