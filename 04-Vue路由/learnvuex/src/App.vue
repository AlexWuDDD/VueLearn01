<template>
  <div id="app">
    <h2>---------modules内容----------</h2>
    <h2>{{$store.state.a.name}}</h2>
    <button @click="changeNameA">修改名字</button>
    <button @click="achangeNameA">异步修改名字</button>
    <h2>{{$store.getters.fullName}}</h2>
    <h2>{{$store.getters.fullName2}}</h2>
    <h2>{{$store.getters.fullName3}}</h2>
    <h2>{{$store.state.b.name}}</h2>
    <h2>----------App内容------------</h2>
    <h2>{{$store.state.counter}}</h2>
    <button @click="addition">+</button>
    <button @click="subtraction">-</button>
    <button @click="addCount(5)">+5</button>
    <button @click="addCount(10)">+10</button>
    <button @click="addStudent">添加学生</button>
    <h2>----------App内容： getters相关信息---</h2>
    <h2>{{$store.getters.powerCounter}}</h2>
    <h2>{{$store.getters.more20stu}}</h2>
    <h2>{{$store.getters.more20stuLength}}</h2>
    <h2>{{$store.getters.moreAgestu(10)}}</h2>
    <h2>----------App内容： info对象的内容是否是响应式的---</h2>
    <h2>{{$store.state.info}}</h2>
    <button @click="changeInfo">修改信息</button>
    <button @click="achangeInfo">异步修改信息</button>
    <h2>----------Hello Vuex内容------------</h2>
    <hello-vuex></hello-vuex>
  </div>
</template>

<script>
import HelloVuex from "./components/HelloVuex";
import * as types from "./store/mutations-types"
export default {
  name: 'App',
  data(){
    return{
      message:"我是App组件",
    }
  },
  components: {
    HelloVuex,
  },
  methods:{
    addition(){
      this.$store.commit(types.INCREMENT);
    },
    subtraction(){
      this.$store.commit(types.DECREMENT);
    },
    addCount(count){
      //payload: 负载
      //1. 普通的提交风格
      // this.$store.commit('incrementCount', count);

      //2. 特殊的提交封装
      this.$store.commit({
        type: 'incrementCount',
        count: count,
      });
    },
    addStudent(){
      const stu = {id:114, name: 'curry', age: 12};
      this.$store.commit('addStudent', stu);
    },
    changeInfo(){
      this.$store.commit('updateInfo');
    },
    achangeInfo(){
      // this.$store.dispatch('aUpdateInfo', {
      //   message: '我是携带的信息',
      //   success:()=> {
      //     console.log('里面已经完成了');
      //   },
      //   failed: ()=>{
      //     console.log('里面失败了');
      //   }
      // }
      // );
      this.$store.dispatch('aUpdateInfo',
        '我是携带的信息').then(res=>{
        console.log('里面完成了提交');
        console.log(res);
      });
    },
    changeNameA(){
      this.$store.commit('updateNameA');
    },
    achangeNameA(){
      this.$store.dispatch('aUpdateName');
    }

  }
}
</script>

<style>

</style>
