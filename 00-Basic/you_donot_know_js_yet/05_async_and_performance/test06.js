var p = Promise.resolve( 42 );

p.then(
    function fulfilled(msg){
      // 数字没有字符串方法,
      // 所以这里抛出一个错误
      console.log( msg.toLowerCase() );
    },
    function rejected(err){
      // 永远不会到这里
    }
).then(
    null,
    function errPrint(err) {
      console.log("Err:", err);
    }
);