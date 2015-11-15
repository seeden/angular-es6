import { load } from 'angular-es6';

load.controllers(require.context('./', true, /.*\.js$/));
