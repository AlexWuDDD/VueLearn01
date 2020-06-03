export default {
  //异步操作
  //context: 上下文
  // aUpdateInfo(context, payload){
  //   setTimeout(()=>{
  //     context.commit('updateInfo');
  //     console.log(payload.message);
  //     if(true){
  //       payload.success();
  //     }
  //   }, 1000);
  // },
  aUpdateInfo(context, payload){
    return new Promise((resolve, reject) =>{
      setTimeout(()=>{
        context.commit('updateInfo');
        console.log(payload);
        resolve('111111111');
      }, 1000);
    })
  },

};
