let name = '小明'
let age = 18;
let flag = true;

function sum(num1, num2) {
  return num1 + num2;
}

if(flag){
  console.log(sum(10, 25));
}

//1. 导出方式一
export {
  flag,sum
}

//2.导出方式二
export var num1 = 1000;
export var num2 = 2000;

//3.导出函数和类
export function mul(num1, num2) {
  return num1*num2;
}

export class Person{
  run(){
    console.log("running");
  }
}

//4.export default 只能有一个
const address = `上海市`;
export default address;