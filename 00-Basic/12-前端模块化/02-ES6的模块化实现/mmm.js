
import {flag, sum} from './aaa.js';

if(flag){
  console.log('小明是天才，哈哈哈');
  console.log(sum(20, 30));
}

import {num1, num2} from "./aaa.js";

console.log(sum(num1, num2));

import {mul} from "./aaa.js";

console.log(mul(30, 4));

import {Person} from "./aaa.js";

const p = new Person();
p.run();

import addr from './aaa.js'

console.log(addr);

//统一全部导入
import * as aaa from './aaa.js';