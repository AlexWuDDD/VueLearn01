import Vue from 'vue';
import Vuex from 'vuex';
import {DECREMENT, INCREMENT} from "./mutations-types";

//1. 安装插件
Vue.use(Vuex)

//2. 创建对象

const moduleA = {
  state:{
    name:'moduleA',
  },
  mutations:{
    updateNameA(state){
      state.name = "AAAA";
    }
  },
  actions:{
    aUpdateName(context){
      setTimeout(()=>{
        context.commit('updateNameA');
      },1000);
    }
  },
  getters:{
    fullName(state){
      return state.name + '11111';
    },
    fullName2(state, getters){
      return getters.fullName + "22222";
    },
    fullName3(state, getters, rootState){
      return getters.fullName2 + rootState.counter;
    }

  }
};

const moduleB = {
  state:{
    name: 'moduleB',
  },
  mutations:{},
  actions:{},
  getters:{}
};


const store = new Vuex.Store({
  state:{
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
  },
  mutations:{
    //同步操作
    [INCREMENT](state){
      state.counter++;
    },
    [DECREMENT](state){
      state.counter--;
    },
    incrementCount(state, payload){
      state.counter += payload.count;
    },
    addStudent(state,stu) {
      state.students.push(stu);
    },
    updateInfo(state){
      // state.info.name = "alex";
      // Vue.set(state.info, "address", "洛杉机");
      Vue.delete(state.info, "age");
    }
  },
  actions:{
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

  },
  getters:{
    powerCounter(state){
      return state.counter * state.counter;
    },
    more20stu(state){
      return state.students.filter(s => s.age > 20);
    },
    more20stuLength(state, getters){
      return getters.more20stu.length;
    },
    moreAgestu(state){
      return function(age) {
        return state.students.filter(s => s.age > age);
      }
    }

  },
  modules:{
    a: moduleA,
    b: moduleB,
  }
});

//3. 导出store对象
export default store;
