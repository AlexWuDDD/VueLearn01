function foo() {
  setTimeout(()=>{
    console.log(this.a);
  },5000);
}

var obj = {
  a:2
};

foo.call(obj);