<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  import Home from "views/home/Home";
  export default {
    name: 'App',
    components: {
      Home,
    }
  }
</script>

<style>
  @import "assets/css/base.css";
  @import "assets/css/BonBonButtons.css";
  @import "assets/fontawesome-free-5.13.0-web/css/all.css";
</style>
