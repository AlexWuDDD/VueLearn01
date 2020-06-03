<template>
  <div @click="btnClick">
    <span class="button glossy"><i class="fas fa-arrow-circle-left"></i></span>
  </div>
</template>

<script>
  export default {
    name: "BackBeginnerButton",
    props:{
      path: String,
      color: String,
    },
    methods:{
      btnClick(){
        this.$router.replace(this.path);
      }
    }
  }
</script>

<style scoped>
  i{
    margin-left: -7px;
  }
  div{
    position: fixed;
    top: 0;
    right: 0;
  }
</style>
