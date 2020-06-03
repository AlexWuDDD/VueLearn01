// for(var i = 0; i<10;i++){
//   console.log(i);
// }
// i += 20;
// console.log(i);

// a=2;
// var a;
// console.log(a);

// function foo() {
//   var a = 2;
//   function bar() {
//     console.log(a);
//   }
//   bar();
// }
//
// foo();

// function foo() {
//   let a = 2;
//   function bar() {
//     console.log(a);
//   }
//   return bar;
// }
//
// var baz = foo();
// baz();

// function foo() {
//   let a = 2;
//   function baz() {
//     console.log(a);
//   }
//
//   bar(baz);
// }
//
// function bar(fn) {
//   fn();
// }
//
// foo();

// function wait(message) {
//   setTimeout(function timer(){
//     console.log(message);
//   }, 1000);
// }
//
// wait("Hello, closure");

// for(var i=1; i<=5; ++i){
//   setTimeout(function timer() {
//     console.log(i);
//   }, i * 1000);
// }

for(var i=1; i<=5; ++i){
  (function (j) {
    setTimeout(function timer() {
      console.log(j);
    }, j*1000);
  })(i);
}
