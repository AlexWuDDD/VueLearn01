if(!Number.EPSILON){
  Number.EPSILON = Math.pow(2, -52);
}

function numberCloseEnoughToEqual(n1, n2) {
  return Math.abs(n1 - n2) < Number.EPSILON;
}

let a = 0.1 + 0.2;
let b = 0.3;

console.log(numberCloseEnoughToEqual(a, b));

console.log(numberCloseEnoughToEqual(0.0000001, 0.0000002));

console.log(1 / 0);
console.log(-1 / 0);

//distinguish a -0 and a 0 in your code

function isNegZero(n) {
  n = Number(n);
  return (n===0)&&(1/n === -Infinity);
}

console.log(isNegZero(-0));;
console.log(isNegZero(0 / -3));
console.log(isNegZero(0));

a = 2/"foo";
b = -3 * 0;
console.log(Object.is(a, NaN));;
console.log(Object.is(b, -0));
console.log(Object.is(b, 0));

if(!Object.is){
  Object.is = function (v1, v2) {
    //test for '-0
    if(v1 === 0 && v2 === 0){
      return 1/v1 === 1/v2;
    }
    //test for NaN
    if(v1 !== v1){
      return v2 !== v2;
    }
    //everything else
    return v1 === v2;
  }
}

//how to empty existing array
x = [1,2,3,4];
x.length = 0;