"use strict"
// function foo() {
//   var something = "cool";
//   var another = [1, 2, 3];
//
//   function doSomething() {
//     console.log(something);
//   }
//
//   function doAnother() {
//     console.log(another.join("!"));
//   }
// }

// function CoolModule() {
//   var something = "cool";
//   var another = [1, 2, 3];
//
//   function doSomething() {
//     console.log(something);
//   }
//
//   function doAnother() {
//     console.log(another.join("!"));
//   }
//   return{
//     doSomething: doSomething,
//     doAnother: doAnother
//   };
// }
//
// var foo = CoolModule();
//
// foo.doSomething();
// foo.doAnother();

// var foo = (function CoolMoudle() {
//   var something = "cool";
//   var another = [1, 2, 3];
//
//   function doSomething() {
//     console.log(something);
//   }
//
//   function doAnother() {
//     console.log(another.join("!"));
//   }
//   return{
//     doSomething: doSomething,
//     doAnother: doAnother
//   };
// })();
//
// foo.doSomething();
// foo.doAnother();

// function CoolMoudle(id) {
//   function identify() {
//     console.log(id);
//   }
//
//   return{
//     identify: identify
//   };
// }
//
// var foo1 = CoolMoudle("foo 1");
// var foo2 = CoolMoudle("foo 2");
//
// foo1.identify();
// foo2.identify();

// var foo = (function CoolModule(id) {
//   function identify1() {
//     console.log(id);
//   }
//   function identify2() {
//     console.log(id.toUpperCase());
//   }
//
//   function change() {
//     publicAPI.identify = identify2;
//   }
//
//   var publicAPI = {
//     change: change,
//     identify: identify1
//   }
//   return publicAPI;
// })("foo module");
//
// foo.identify();
// foo.change();
// foo.identify();

var MyModules = (function Manager() {
  var modules = {};
  function define(name, deps, impl) {
    for(var i=0;i<deps.length;++i){
      deps[i] = modules[deps[i]];
    }
    modules[name] = impl.apply(impl, deps);
  }

  function get(name) {
    return  modules[name];
  }
  return{
    define: define,
    get: get
  }
})()

MyModules.define("bar", [], function () {
  function hello(who) {
    return "Let me introduce: " + who;
  }
  return {
    hello: hello
  }
});

MyModules.define("foo", ["bar"], function (bar) {
  var hungry = "hippo";
  function awesome() {
    console.log(bar.hello(hungry).toUpperCase());
  }
  return {
    awesome:awesome
  };
})

var bar = MyModules.get("bar");
var foo = MyModules.get("foo");


console.log(bar.hello("hippo"));
foo.awesome();


