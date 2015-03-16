import angular from 'angular';
import UserService from './user';
 
var moduleName='app.services';
 
angular.module(moduleName, [])
	.service('user', UserService);
 
export default moduleName;