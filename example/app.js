import angular from 'angular';
import 'angular-route';
import 'angular-cookies';
import 'angular-resource';
import 'angular-sanitize';

import controllers from './controllers';
import directives from './directives';
import services from './services';
import filters from './filters';

import routeConfig from './config/route';
import exceptionConfig from './config/exception';
import compileProviderConfig from './config/compileProvider';

export const name = 'app';

export default angular
  .module(name, ['ngRoute', 'ngResource', 'ngCookies', 'ngSanitize',
    factories, services, controllers, filters])
  .config(exceptionConfig)
  .config(compileProviderConfig)
  .config(routeConfig);
