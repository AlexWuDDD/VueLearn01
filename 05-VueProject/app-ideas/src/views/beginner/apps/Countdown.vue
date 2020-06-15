<template>
  <div id="Countdown">
    <BackButton path="/beginner"></BackButton>

    <CountdownWidget timeTillDate="06 26 2028, 00:00 am"></CountdownWidget>
  </div>
</template>

<script>
  import BackButton from "components/content/BackButton";
  import CountdownWidget from "./CountdownWidget";
  export default {
    name: "Countdown",
    components:{
      BackButton,
      CountdownWidget,
    },
  }
</script>

<style scoped>

</style>
