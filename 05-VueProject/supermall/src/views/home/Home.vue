<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <HomeSwiper :banner="banner"></HomeSwiper>
    <RecommendView :recommend="recommend"></RecommendView>
  </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";
  import HomeSwiper from "./childComponents/HomeSwiper";
  import RecommendView from "./childComponents/RecommendView";

  import {getHomeMultidata} from "network/home";

  export default {
    name: "Home",
    data(){
      return{
          banner:[],
          recommend: [],
      };
    },
    components:{
      NavBar,
      HomeSwiper,
      RecommendView
    },
    created() {
      //1. 请求多个数据
      getHomeMultidata().then(res=>{
        console.log(res);
        this.banner = res.data.banner.list;
        this.recommend = res.data.recommend.list;
      })
    }
  }
</script>

<style scoped>
  .home-nav{
    background-color: var(--color-tint);
    color: #fff;
  }
</style>
