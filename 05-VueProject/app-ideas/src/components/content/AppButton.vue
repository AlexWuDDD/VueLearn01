<template>
  <div class="AppButton" @click="btnClick">
    <span class="button pink glossy" >{{AppName}}</span>
  </div>
</template>

<script>
  export default {
    name: "AppButton",
    props:{
      path: String,
      AppName: String,
    },
    methods:{
      btnClick(){
        this.$router.replace(this.path);
      },
    }
  }
</script>

<style scoped>
  .button{
    border-radius: .3em;
  }

</style>
