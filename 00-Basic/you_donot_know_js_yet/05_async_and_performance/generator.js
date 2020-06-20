// var x = 1;
//
// function foo() {
//   x++;
//   bar();
//   console.log("x: ", x);
// }
//
// function bar() {
//   x++;
// }
//
// foo();

// var x = 1;
//
// function *foo() {
//   x++;
//   yield ; //暂停
//   console.log("x: ", x);
// }
//
// function bar() {
//   x++;
// }
//
// var it = foo(); //构建一个迭代器it来控制generator
// it.next(); //在这里开始‘foo()'!
// console.log(x);
// bar();
// console.log(x);
// it.next();

//输入和输出
// function *foo(x, y) {
//   return x * y;
// }
//
// var it = foo(6,7);
// var res = it.next();
// console.log(res.value);

//迭代通信
// function *foo(x) {
//   let y = x * (yield);
//   return y;
// }
//
// var it = foo(6);
// it.next();
// var res = it.next(7);
//
// console.log(res.value);

// function *foo(x) {
//   let y = x * (yield "hello");
//   return y;
// }
//
// var it = foo(6);
// var res = it.next();
// console.log(res.value);
// res = it.next(7);
// console.log(res.value);

//多迭代器
// function *foo() {
//   var x = yield 2;
//   z++;
//   var y = yield (x*z);
//   console.log(x, y, z);
// }
//
// var z = 1;
//
// var it1 = foo();
// var it2 = foo();
//
// var val1 = it1.next().value;
// var val2 = it2.next().value;
//
// console.log(val1);
// console.log(val2);
//
// //赋值给x,然后到第二个yield
// val1 = it1.next(val2*10).value;
// val2 = it2.next(val1*5).value;
//
// it1.next(val2/2);
// it2.next(val1/4);

var a = 1;
var b = 2;

function *foo() {
  a++;
  yield;
  b = b * a;
  a = (yield b) + 3;
}

function *bar() {
  b--;
  yield;
  a = (yield 8) + b;
  b = a * (yield 2);
}

function step(gen) {
  var it = gen();
  var last;

  return function() {
    // 不论`yield`出什么，只管在下一次时直接把它塞回去！
    last = it.next( last ).value;
  };
}
var s1 = step( foo );
var s2 = step( bar );
// // 首先完全运行`*foo()`
// s1();
// s1();
// s1();
//
// // 现在运行`*bar()`
// s2();
// s2();
// s2();
// s2();

s2();		// b--;
s2();		// 让出 8
s1();		// a++;
s2();		// a = 8 + b;
// 让出 2
s1();		// b = b * a;
// 让出 b
s1();		// a = b + 3;
s2();		// b = a * 2;

console.log( a, b );

