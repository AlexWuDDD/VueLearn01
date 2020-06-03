<template>
  <div id="home">
      <div class="my_title">App Ideas</div>
      <HomeButton path="/beginner" buttonName="初级"></HomeButton>
      <HomeButton path="/intermediate" buttonName="中级"></HomeButton>
      <HomeButton path="/advanced" buttonName="高级"></HomeButton>
  </div>
</template>

<script>
  import HomeButton from "components/content/HomeButton";
  export default {
    name: "Home",
    components:{
      HomeButton,
    }
  }
</script>

<style scoped>
  #home{
    height: 100vh;
    width: 100vw;
    background:
      linear-gradient(27deg, #151515 5px, transparent 5px) 0 5px,
      linear-gradient(207deg, #151515 5px, transparent 5px) 10px 0px,
      linear-gradient(27deg, #222 5px, transparent 5px) 0px 10px,
      linear-gradient(207deg, #222 5px, transparent 5px) 10px 5px,
      linear-gradient(90deg, #1b1b1b 10px, transparent 10px),
      linear-gradient(#1d1d1d 25%, #1a1a1a 25%, #1a1a1a 50%, transparent 50%, transparent 75%, #242424 75%, #242424);
    background-color: #131313;
    background-size: 20px 20px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .my_title{
    font-size: 3em;
    color: #fafafa;
    letter-spacing: .5em;
    margin-bottom: 1em;
    text-shadow: 0px 1px 0px #999, 0px 2px 0px #888, 0px 3px 0px #777, 0px 4px 0px #666, 0px 5px 0px #555, 0px 6px 0px #444, 0px 7px 0px #333, 0px 8px 7px #001135;
  }


</style>
