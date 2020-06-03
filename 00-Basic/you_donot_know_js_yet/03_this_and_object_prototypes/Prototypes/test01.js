// var myObject = {
//   a: 2
// };
//
// console.log(myObject.a);

var anotherObject = {
  a : 2
};

var myOBject = Object.create(anotherObject);

myOBject.a = 3;

console.log(anotherObject.a);
console.log(myOBject.a);