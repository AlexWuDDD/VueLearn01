var s = new String("Hello world!");
console.log(s.toString());

var a = new String("abc");
console.log(typeof a);

console.log(a instanceof String);

console.log(Object.prototype.toString.call(a));;

console.log(a);

var a = new Array( 3 );
var b = [ undefined, undefined, undefined ];
delete b[1];
var c = [];
c.length = 3;
console.log(a);
console.log(b);
console.log(c);

//this is good
var a = Array.apply( null, { length: 3 } );
console.log(a);; // [ undefined, undefined, undefined ]

// these two are stupid
var b =[];
console.log(b);

var c = Array(3);
console.log(c);


var d = new Date();
console.log(d.getTime());

console.log(Date.now());

/*************************************************************************************/

let mysym = Symbol("my own symbol");
console.log(mysym);
console.log(mysym.toString());
console.log(typeof mysym);
var a = {};

a[mysym] = "foobar";
console.log(Object.getOwnPropertySymbols(a));

