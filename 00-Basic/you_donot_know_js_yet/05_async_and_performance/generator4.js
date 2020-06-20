function *main() {
  var x = yield "Hello World";

  try{
    x.toLowerCase();
  }
  catch (err) {
    throw ("oops")
  }// 引发一个异常！
}

var it = main();

console.log(it.next().value);			// Hello World

try {
  let ret = it.next( 55 );
  console.log(ret.value);
}
catch (err) {
  console.error( err );	// TypeError
}
finally {
  console.log("aaaaa");
}