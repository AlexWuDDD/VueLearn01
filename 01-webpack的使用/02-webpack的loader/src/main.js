//commonJS
const {add, mul} = require('./js/mathUtils.js')

console.log('aaa');
console.log('bbbb');

console.log(add(100, 200));
console.log(mul(6, 20));

//ES6模块化规范
import * as info from './js/info.js'

console.log(info.name);
console.log(info.age);
console.log(info.height);

//3.依赖css文件
require('./css/normal.css');

//4. 依赖less文件
require('./css/special.less');

document.writeln("<h2>Hello, Alex</h2>");