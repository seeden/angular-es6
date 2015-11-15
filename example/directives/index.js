import { load } from 'angular-es6';

const MODULE_NAME = 'es6.directives';

load.directives(require.context('./', true, /.*\.js$/), MODULE_NAME);

export default MODULE_NAME;
