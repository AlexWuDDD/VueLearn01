<template>
  <div id="ChristmaxLightsWrapper">
    <BackButton path="/beginner"></BackButton>
    <div class="container">
      <ChristmaxLight lightColor="rgb(255, 0, 0)" startTime="0.1" toTime="0.9" ></ChristmaxLight>
      <ChristmaxLight lightColor="rgb(255, 165, 0)" startTime="0.1" toTime="0.9" ></ChristmaxLight>
      <ChristmaxLight lightColor="rgb(255, 255, 0)" startTime="0.1" toTime="0.9" ></ChristmaxLight>
      <ChristmaxLight lightColor="rgb(0, 255, 0)" startTime="0.1" toTime="0.9" ></ChristmaxLight>
      <ChristmaxLight lightColor="rgb(0, 127, 255)" startTime="0.1" toTime="0.9" ></ChristmaxLight>
      <ChristmaxLight lightColor="rgb(0, 0, 255)" startTime="0.1" toTime="0.9" ></ChristmaxLight>
      <ChristmaxLight lightColor="rgb(139, 0, 255)" startTime="0.1" toTime="0.9"></ChristmaxLight>
    </div>
  </div>
</template>

<script>
  import BackButton from "components/content/BackButton";
  import ChristmaxLight from "components/content/ChristmaxLight";
  export default {
    name: "ChristmasLights",
    components:{
      BackButton,
      ChristmaxLight,
    }
  }
</script>

<style scoped>
  #ChristmaxLightsWrapper{
    width: 100vw;
    height: 100vh;
    background: dimgrey;
  }

  .container{
    display: flex;
    flex-direction: row;
  }


</style>
