import angular from 'angular';
import 'angular-route';
import 'angular-cookies';
import 'angular-resource';
import 'angular-sanitize';

import './directives';
import controllers from './controllers';
import services from './services';
import filters from './filters';
import factories from './factories';

import routeConfig from './config/route';
import { exception, compileProvider} from 'angular-es6';

export const name = 'es6';

export default angular
  .module(name, ['ngRoute', 'ngResource', 'ngCookies', 'ngSanitize',
    filters, factories, services, controllers])
  .config(exception)
  .config(compileProvider)
  .config(routeConfig);
