import Vue from 'vue'
import App from './App'
import axios from 'axios'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})

//1. 基本使用
// axios({
//   url: 'http://123.207.32.32:8000/home/multidata',
//   method: 'get',
// }).then(res=>{
//   console.log(res);
// });
//
// axios({
//   // url: 'http://123.207.32.32:8000/home/data?type=sell&page=3',
//   url: 'http://123.207.32.32:8000/home/data',
//   //专门针对get请求的参数拼接
//   params:{
//     type: 'pop',
//     page: 1
//   }
// }).then(res=>{
//   console.log(res);
// });

//2.axios放送并发请求
// axios.all([axios({
//   url: 'http://123.207.32.32:8000/home/multidata',
// }), axios({
//   url: 'http://123.207.32.32:8000/home/data?type=sell&page=5'
// })]).then(results =>{
//   console.log(results);
//   console.log(results.length);
//   console.log(results[0]);
//   console.log(results[1]);
// });

//3.全局相关配置
// axios.defaults.baseURL = 'http://123.207.32.32:8000';
// axios.defaults.timeout = 5000;
// //get用params post用data
//
// axios.all([axios({
//   url: '/home/multidata',
// }), axios({
//   url: '/home/data?type=sell&page=5'
// })]).then(axios.spread((res1, res2)=>{
//     console.log(res1);
//     console.log(res2);
//   })
// );

//4. 创建对应的axios的实例
// const instance1 = axios.create({
//   baseURL: 'http://222.111.33.33:8000',
//   timeout: 5000
// });
//
// instance1({
//   url: '/home/multidata'
// }).then(res => {
//   console.log(res);
// });

//5. 封装request
import {request} from "./network/request";

// request({
//   baseConfig:{
//
//   },
//   success: function (res) {
//
//   },
//   failure: function (err) {
//
//   },
// })

request({
  url: '/home/multidata',
}).then(res => {
  console.log(res);
}).catch(err=>{
  console.log(err);
})
