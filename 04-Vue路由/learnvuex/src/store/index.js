import Vue from 'vue';
import Vuex from 'vuex';
import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";
import moduleA from "./modules/moduleA";
import moduleB from "./modules/moduleB";

//1. 安装插件
Vue.use(Vuex)

//2. 创建对象
const state = {
  counter: 1000,
  students:[
    {id:110, name: 'alex', age: 18},
    {id:111, name: 'amy', age: 24},
    {id:112, name: 'kobe', age: 30},
    {id:113, name: 'james', age: 36},
  ],
  info: {
    name: "kobe",
    age:40,
    height:1.98
  }
};

const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  modules:{
    a: moduleA,
    b: moduleB,
  }
});

//3. 导出store对象
export default store;
