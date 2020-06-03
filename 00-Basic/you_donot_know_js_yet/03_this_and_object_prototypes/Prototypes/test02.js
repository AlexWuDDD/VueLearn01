function foo() {

}

console.log(foo.prototype.constructor === foo);

var a = new foo();

a.constructor === foo;