import { load } from 'angular-es6';

const MODULE_NAME = 'es6.filters';

load.filters(require.context('./', true, /.*\.js$/), MODULE_NAME);

export default MODULE_NAME;
