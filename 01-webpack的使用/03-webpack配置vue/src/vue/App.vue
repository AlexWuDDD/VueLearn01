<template>
  <div>
    <h2 class="title">{{message}}</h2>
    <button @click="btnClick">按钮</button>
    <h2>{{name}}</h2>
    <Cpn/>
  </div>
</template>

<script>
  import Cpn from "./Cpn";
  export default {
    name: "App",
    components:{
      Cpn
    },
    data(){
      return {
        message: 'Alex is cool',
        name: 'Alex',
      };
    },
    methods:{
      btnClick(){

      }
    },
  }
</script>

<style scoped>
  .title{
    color: blueviolet;
  }
</style>