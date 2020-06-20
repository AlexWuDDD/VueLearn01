<template>
  <div id="tabControl">
    <div v-for="(item, index) in titles"
         class="tabControlItem"
         :class="{active: index === currentIndex}"
         @click="tabClick(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TabControl",
    props:{
      titles:{
        type: Array,
        default(){
          return [];
        }
      }
    },
    data(){
      return {
        currentIndex: 0,
      };
    },
    methods:{
      tabClick(index){
        this.currentIndex = index;
      }
    }
  }
</script>

<style scoped>
  #tabControl{
    display: flex;
    text-align: center;
    font-size: 15px;
    height: 40px;
    line-height: 40px;
    background: #fff;
  }

  .tabControlItem{
    flex: 1;
  }

  .tabControlItem span{
    padding: 5px;
  }

  .active{
    color: var(--color-high-text);
  }

  .active span{
    border-bottom: 3px solid var(--color-tint);
  }
</style>
