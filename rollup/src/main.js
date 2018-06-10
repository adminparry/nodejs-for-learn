
export * from './foo.js';
export { version } from '../package.json';

import _ from 'lodash';

console.log(_.VERSION);


import {reg_number} from './REGEXP/constans.js';

console.log(reg_number.test(666));

import {port} from 'a/a.js';

console.log(`this server is running at ${port}`)
