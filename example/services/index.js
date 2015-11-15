import { load } from 'angular-es6';

const MODULE_NAME = 'es6.services';

load.services(require.context('./', true, /.*\.js$/), MODULE_NAME);

export default MODULE_NAME;
