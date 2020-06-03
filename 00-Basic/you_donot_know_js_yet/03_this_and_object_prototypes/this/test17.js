// function foo() {
//   console.log(this.a)
// }
//
// var a = 2;
//
// foo.call(null);

// function foo(a, b) {
//   console.log("a:" + a + ", b:" + b);
// }
//
// foo.apply(null, [2,3]);
//
// var bar = foo.bind(null, 2);
// bar(3);

// function foo(a, b) {
//   console.log("a:" + a + ", b:" + b);
// }
//
// var ø = Object.create(null);
//
// foo.apply(ø, [2,3]);
//
// var bar = foo.bind(ø, 2);
// bar(3);

function foo() {
  console.log(this.a);
}

var a = 2;
var o = {a:3, foo:foo};
var p = {a:4};

o.foo();
(p.foo = o.foo)();
foo.call(p);


