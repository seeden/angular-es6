import angular from 'angular';
import { name } from './app.js';

window.name = 'NG_DEFER_BOOTSTRAP!';

angular.element().ready(() => {
  angular.resumeBootstrap([name]);
});
