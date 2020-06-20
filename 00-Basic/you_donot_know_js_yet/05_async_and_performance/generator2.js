//生成值
// let gimmeSomething = (function () {
//   let nextVal;
//   return function () {
//     if(nextVal === undefined){
//       nextVal =1;
//     }
//     else{
//       nextVal = (3 * nextVal) + 6;
//     }
//     return nextVal;
//   };
// })();
//
//
// console.log(gimmeSomething());
// console.log(gimmeSomething());
// console.log(gimmeSomething());
// console.log(gimmeSomething());

let something = (function () {
  let nextVal;
  return {
    [Symbol.iterator]: function () {return this;},
    next: function () {
      if(nextVal === undefined){
        nextVal = 1;
      }
      else{
        nextVal = (3 * nextVal) + 6;
      }
      return {done: false, value: nextVal};
    }
  }
})();

console.log(something.next().value);
console.log(something.next().value);
console.log(something.next().value);
console.log(something.next().value);