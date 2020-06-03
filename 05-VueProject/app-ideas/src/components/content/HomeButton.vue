<template>
  <div class="homeButton" @click="btnClick">
    <span class="button">{{buttonName}}</span>
  </div>
</template>

<script>
  export default {
    name: "HomeButton",
    props:{
      path: String,
      buttonName: String,
    },
    methods:{
      btnClick(){
        this.$router.replace(this.path);
      },
    }
  }
</script>

<style scoped>

</style>
