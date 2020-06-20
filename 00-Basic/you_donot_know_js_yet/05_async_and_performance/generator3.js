function *something() {
  try {
    var nextVal;

    while (true) {
      if (nextVal === undefined) {
        nextVal = 1;
      } else {
        nextVal = (3 * nextVal) + 6;
      }

      yield nextVal;
    }
  }
  finally{
    console.log("cleaning up");
  }
}

for (let v of something()) {
  console.log( v );

  // 不要让循环永无休止！
  if (v > 500) {
    break;
  }
}

var it = something();
for (var v of it) {
  console.log( v );

  // 不要让循环永无休止！
  if (v > 500) {
    console.log(
        // 使generator得迭代器完成
        it.return( "Hello World" ).value
    );
    // 这里不需要`break`
  }
}