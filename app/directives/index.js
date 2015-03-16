import angular from 'angular';
import NiceDirective from './nice';
import createDirectiveFactory from '../utils/createdirectivefactory';
 
var moduleName='app.directives';
 
angular.module(moduleName, [])
	.directive('nice', createDirectiveFactory(NiceDirective));
 
export default moduleName;