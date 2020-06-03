//object constant

var myObject = {};

Object.defineProperty(myObject, "FAVORITE_NUMBER",{
  value:42,
  writable:false,
  configurable:false
});
console.log(myObject.FAVORITE_NUMBER);

// Prevent extensions

Object.preventExtensions(myObject);
myObject.b = 3;
console.log(myObject.b);

//Object.seal()
//not only can you add any more properties
//but you also cannot reconfigure or delete
//any existing properties
//though you can still modify their values

//Object.freeze()
//Object.seal() + writable:false

