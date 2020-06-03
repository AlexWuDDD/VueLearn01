function anotherFunction() { /*..*/ }
var anotherObject = {
  c: true
};
var anotherArray = [];
var myObject = {
  a: 2,
  b: anotherObject, // reference, not a copy!
  c: anotherArray, // another reference!
  d: anotherFunction
};
anotherArray.push( 1,2 );

var newObj = Object.assign( {}, myObject );

newObj.a = 3;
console.log(myObject.a);
console.log(newObj.a);

newObj.c.push(3);
console.log(myObject.c);
console.log(newObj.c);