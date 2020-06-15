<template>
  <div id="BorderRadiusPreviewer">
    <BackButton path="/beginner"></BackButton>
    <div class="block">
      <div class="BRPwrapper">
        <el-slider class="top-L" v-model="LeftTop"></el-slider>
        <el-slider class="top-R" v-model="RightTop"></el-slider>
        <el-slider class="right-T" vertical v-model="TopRight"></el-slider>
        <el-slider class="right-B" vertical v-model="BottomRight"></el-slider>
        <el-slider class="bottom-L" v-model="LeftBottom"></el-slider>
        <el-slider class="bottom-R" v-model="RightBottom"></el-slider>
        <el-slider class="left-T" vertical v-model="TopLeft"></el-slider>
        <el-slider class="left-B" vertical v-model="BottomLeft"></el-slider>
      </div>
      <div class="box" :style="myBR">
      </div>
    </div>
    <div class="info">
      <el-input id="cssInfo" class="cssInfo" v-model="message"></el-input>
      <el-button type="info" @click="copyInfo">copy</el-button>
    </div>
  </div>
</template>

<script>
  import BackButton from "components/content/BackButton";
  export default {
    name: "BorderRadiusPreviewer",
    data(){
      return{
        top: null,
        right:null,
        bottom:null,
        left:null,

        LeftTop: 47,
        RightTop: 48,
        RightBottom: 49,
        LeftBottom: 50,

        TopLeft: 51,
        TopRight:52,
        BottomRight:53,
        BottomLeft:54,

        myBR: null,
      };
    },
    computed:{
      message(){
        let rawInfo = "border-radius: " + this.LeftTop + "% " + this.RightTop + "% "  + this.RightBottom + "% "  + this.LeftBottom
          +"% / " + this.TopLeft + "% " + this.TopRight + "% "  +this.BottomRight + "% " + this.BottomLeft + "%";

        this.myBR = rawInfo;
        console.log(this.myBR);

        return rawInfo;
      },
    },
    components:{
      BackButton,
    },
    methods:{
      copyInfo(){
        let target = document.getElementById('cssInfo');
        console.log(target);
        target.select();
        document.execCommand("copy");
        this.$message("copy successfully!");
      }
    }
  }
</script>

<style scoped>
  #BorderRadiusPreviewer{
    width: 100vw;
    height: 100vh;
    background: #2e2a23;

    display: flex;
    flex-direction: column;

    justify-content: center;
    align-items: center;

  }

  .block{
    background: #711c12;
    width: 600px;
    height: 600px;

    position: relative;
    border-radius: 20px
  }

  .box{
    width: 400px;
    height: 400px;
    background: #616161;
    position: absolute;
    top:0;right: 0;bottom: 0;left: 0;margin: auto;
  }

  .top-L, .top-R, .bottom-L, .bottom-R{
    width: 200px;
    position: absolute;
  }

  .top-L, .top-R{
    top: 25px;
  }

  .bottom-L, .bottom-R{
    bottom: 25px;
  }

  .top-L, .bottom-L{
    left: 80px;
  }

  .top-R, .bottom-R{
    right: 80px;
  }

  .right-T, .right-B, .left-T, .left-B{
    height: 200px;
    position: absolute;
  }

  .right-T, .right-B{
    right: 25px;
  }

  .left-T, .left-B{
    left: 25px;
  }

  .right-T, .left-T{
    top: 80px;
  }

  .right-B, .left-B{
    bottom: 80px;
  }

  .info{
    margin: 10px;
    display: flex;
    width: 600px;
  }

  .info .cssInfo{
    margin-right: 20px;
  }


</style>
