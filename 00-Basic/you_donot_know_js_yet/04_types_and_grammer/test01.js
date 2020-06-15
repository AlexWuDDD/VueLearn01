console.log(typeof undefined === "undefined");
console.log(typeof true === "boolean");
console.log(typeof 42 === "number");
console.log(typeof "42" === "string");
console.log(typeof {life: 42} === "object");
//add in ES6
console.log(typeof Symbol() === "symbol");

console.log(typeof null === "object");

let a = null;
console.log(!a && typeof a === "object");

//function and array are subtype of object

console.log(typeof function a() {/**/} === "function");

function fa(b,c) {

}
console.log(fa.length);

console.log(typeof [1, 2, 3] === "object");


