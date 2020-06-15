<template>
<div id="Beginner">
  <div class="title"> Beginner Projects </div>
  <AppButton path="/bin2dec" AppName="Bin2Dec"></AppButton>
  <AppButton path="/borderRadiusPreviewer" AppName="BorderRadiusPreviewer"></AppButton>
  <AppButton path="/calculator" AppName="Calculator"></AppButton>
  <AppButton path="/christmasLights" AppName="ChristmasLights"></AppButton>
  <AppButton path="/causeEffect" AppName="CauseEffect"></AppButton>
  <AppButton path="/colorCycle" AppName="ColorCycle"></AppButton>
  <AppButton path="/countdown" AppName="Countdown"></AppButton>
  <BackButton path="/home"></BackButton>
  <router-view/>
</div>
</template>

<script>
  import BackButton from "components/content/BackButton";
  import AppButton from "components/content/AppButton";
  export default {
    name: "Beginner",
    components:{
      BackButton,
      AppButton,
    }
  }
</script>

<style scoped>
  #Beginner{
    width: 100vw;
    height: 100vh;

    background:
      linear-gradient(135deg, #ECEDDC 25%, transparent 25%) -50px 0,
      linear-gradient(225deg, #ECEDDC 25%, transparent 25%) -50px 0,
      linear-gradient(315deg, #ECEDDC 25%, transparent 25%),
      linear-gradient(45deg, #ECEDDC 25%, transparent 25%);
    background-size: 100px 100px;
    background-color: darkslategray;

    display: flex;

    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .title{
    font-size: 3em;
    color: orangered;
    font-weight: bold;
  }


</style>
