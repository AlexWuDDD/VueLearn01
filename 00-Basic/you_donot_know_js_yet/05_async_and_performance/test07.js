var p = Promise.reject( "Oops" ).defer();

// `foo(..)`返回Promise
foo( 42 )
    .then(
        function fulfilled(){
          return p;
        },
        function rejected(err){
          // 处理`foo(..)`的错误
        }
    );