<template>
  <div>
    <h2>我是首页</h2>
    <p>我是首页内容，哈哈哈</p>
    <router-link to="/home/news">新闻</router-link>
    <router-link to="/home/messages">消息</router-link>
    <router-view></router-view>
    <h2>{{message}}</h2>
  </div>
</template>

<script>
  export default {
    name: "Home",
    data(){
      return{
        message:'Hi',
      };
    },
    created() {
      console.log('home created');
      document.title='首页';
    },
    destroyed() {
      console.log('home destroyed');
    },
    // mounted() {
    //   console.log('mounted');
    // },
    // updated() {
    //   console.log('updated');
    // }
  }
</script>

<style scoped>

</style>
