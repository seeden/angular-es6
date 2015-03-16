import angular from 'angular';
import ngRoute from 'angular-route';
import ngCookies from 'angular-cookies';
import ngResource from 'angular-resource';

import controllers from './controllers/index';
import directives from './directives/index';
import services from './services/index';
import routeConfig from './config/route';
import exceptionConfig from './config/exception';

export const name = 'app'; 

export default angular
	.module(name, ['ngRoute', 'ngResource', 'ngCookies', services, controllers, directives])
	.config(exceptionConfig)
	.config(routeConfig);
