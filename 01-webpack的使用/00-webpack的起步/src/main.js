//commonJS
const {add, mul} = require('./mathUtils.js')

console.log('aaa');
console.log('bbbb');

console.log(add(100, 200));
console.log(mul(6, 20));

//ES6模块化规范
import * as info from './info.js'

console.log(info.name);
console.log(info.age);
console.log(info.height);
