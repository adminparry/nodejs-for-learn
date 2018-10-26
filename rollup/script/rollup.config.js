// export default {
//   input: 'src/main.js',
//   output: {
//     file: 'bundle.js',
//     format: 'cjs'
//   }
// };
import json from 'rollup-plugin-json';
const buble = require('rollup-plugin-buble')
const alias = require('rollup-plugin-alias')
const cjs = require('rollup-plugin-commonjs')
const replace = require('rollup-plugin-replace')
const nodeResolve = require('rollup-plugin-node-resolve')

import flow from 'rollup-plugin-flow-no-whitespace';

import babel from 'rollup-plugin-babel';

import { version } from '../package.json';
const banner =
  '/*!\n' +
  ' * parry.js v' + version + '\n' +
  ' * (c) 2014-' + new Date().getFullYear() + ' Evan You\n' +
  ' * Released under the MIT License.\n' +
  ' */'

const aliases = require('./aliases');
const path = require('path');

const resolve = (p) =>{
  
  const base = p.split('/')[0];
  
  if (aliases[base]) {
    return path.resolve(aliases[base], p.slice(base.length + 1))
  } else {

    return path.resolve(__dirname, '../', p)
  }
}


class Config {
  constructor(props) {
    this.input = resolve('src/main.js');
    this.output = {
      file: resolve('build/bundle.js'),
      format: 'umd',
      name: 'MyBundle',
      // env: 'production',
      banner
    }
    this.plugins = [ 
      flow(),
      json(),
      cjs(),
      
      babel({
        exclude: 'node_modules/**' // 只编译我们的源代码
      }),
      alias(Object.assign({}, aliases, { he: './entity-decoder' })),
      nodeResolve({
      // 将自定义选项传递给解析插件
      // customResolveOptions: {
        // moduleDirectory: 'node_modules'
      // }
      })
    ]
  }
 
}

export default new Config