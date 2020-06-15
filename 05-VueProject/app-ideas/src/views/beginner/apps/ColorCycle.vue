<template>
  <div id="colorCycle">
    <BackButton path="/beginner"></BackButton>
    <el-switch class="RGBHSLChoose" :disabled="enableChange"
      v-model="RGBorHSL"
      active-color="#13ce66"
      inactive-color="#ff4949"
      active-text="HSL"
      inactive-text="RGB">
    </el-switch>
    <div class="RGB" v-if="!RGBorHSL">
      <el-input placeholder="R" :disabled="enableChange" v-model="RGB.R"></el-input>
      <el-input placeholder="G" :disabled="enableChange" v-model="RGB.G"></el-input>
      <el-input placeholder="B" :disabled="enableChange" v-model="RGB.B"></el-input>
    </div>
    <div class="HSL" v-else>
      <el-input placeholder="H" :disabled="enableChange" v-model="HSL.H"></el-input>
      <el-input placeholder="S" :disabled="enableChange" v-model="HSL.S"></el-input>
      <el-input placeholder="L" :disabled="enableChange" v-model="HSL.L"></el-input>
    </div>
    <div class="displayBox" :style=BGColor()></div>
    <button @click="btnClick">{{buttonName}}</button>

    <div class="RGBIncreValue" v-if="!RGBorHSL" >
      R-Change<el-input-number v-model="RGB_Incr.R_Incr" :min="0" :max="255" :disabled="enableChange"></el-input-number>
      G-Change<el-input-number v-model="RGB_Incr.G_Incr" :min="0" :max="255" :disabled="enableChange"></el-input-number>
      B-Change<el-input-number v-model="RGB_Incr.B_Incr" :min="0" :max="255" :disabled="enableChange"></el-input-number>
    </div>
    <div class="HSLIncreValue" v-else>
      H-Change<el-input-number v-model="HSL_Incr.H_Incr" :min="0" :max="100" :disabled="enableChange"></el-input-number>
      S-Change<el-input-number v-model="HSL_Incr.S_Incr" :min="0" :max="100" :disabled="enableChange"></el-input-number>
      L-Change<el-input-number v-model="HSL_Incr.L_Incr" :min="0" :max="100" :disabled="enableChange"></el-input-number>
    </div>

    <div class="changeTime">
      Interval
      <el-input-number v-model="interVal" :precision="2" :step="0.1" :max="10" :disabled="enableChange"></el-input-number>
    </div>

  </div>
</template>

<script>
  import BackButton from "components/content/BackButton";
  export default {
    name: "ColorCycle",
    components:{
      BackButton,
    },
    data(){
      return {
        OnOffFlag: false,
        RGBorHSL: false,
        RGB:{
          R:0,
          G:0,
          B:0,
        },
        HSL:{
          H:0,
          S:0,
          L:0,
        },
        RGB_Incr:{
          R_Incr: 0,
          G_Incr: 0,
          B_Incr: 0,
        },
        HSL_Incr:{
          H_Incr: 0,
          S_Incr: 0,
          L_Incr: 0,
        },
        interVal: 0.25,
        timer: null,
      };
    },
    computed:{
      buttonName(){
        return this.OnOffFlag? "Start" : "Stop";
      },
      enableChange(){
        return this.OnOffFlag;
      },
    },
    destroyed() {
      clearInterval(this.timer);
    },
    methods: {
      btnClick(){
        this.OnOffFlag = !this.OnOffFlag;
        console.log(this.OnOffFlag);
        if(this.OnOffFlag){
          this.setTimer();
        }
        else{
          this.clearTimer();
        }
      },
      updateRGB(){
        this.RGB.R += this.RGB_Incr.R_Incr;
        this.RGB.G += this.RGB_Incr.G_Incr;
        this.RGB.B += this.RGB_Incr.B_Incr;

        if(this.RGB.R >= 255){
          this.RGB.R = 0;
        }
        if(this.RGB.G >= 255){
          this.RGB.G = 0;
        }
        if(this.RGB.B >= 255){
          this.RGB.B = 0;
        }
      },
      updateHSL(){
        this.HSL.H += this.HSL_Incr.H_Incr;
        this.HSL.S += this.HSL_Incr.S_Incr;
        this.HSL.L += this.HSL_Incr.L_Incr;

        if(this.HSL.H >= 360){
          this.HSL.H = 0;
        }
        if(this.HSL.S >= 100){
          this.HSL.S = 0;
        }
        if(this.HSL.L >= 100){
          this.HSL.L = 0;
        }
      },
      setTimer(){
        this.timer = setInterval(()=>{
          if(!this.RGBorHSL){
              this.updateRGB();
          }
          else{
              this.updateHSL();
          }
        }, this.interVal * 1000);
      },
      clearTimer(){
        clearInterval(this.timer);
      },
      BGColor(){
        let ret;
        if(!this.RGBorHSL){
          ret = "rgb(" + this.RGB.R + "," +this.RGB.G + ","+this.RGB.B +")";
        }
        else{
          ret = "hsl(" + this.HSL.H + "," +this.HSL.S + "%,"+this.HSL.L +"%)";
        }

        ret = {background: ret};
        console.log(ret);
        return ret;
      }
    }
  }
</script>

<style scoped>
  #colorCycle{
    width: 100vw;
    height: 100vh;
    background: #555555;
    position: relative;
  }

  .displayBox{
    position: absolute;
    width: 50vw;
    height: 50vh;
    margin-top: 25vh;
    margin-left: 25vw;
    border-radius: 50%;
  }

  button{
    position: absolute;
    width: 10vw;
    height: 4vh;
    margin-top: 18vh;
    margin-left: 45vw;
    background: #58a linear-gradient(hsla(0, 0%, 100%, .5), transparent);
    border: none;
    border-radius: .5em;
    font-size: 125%;
    line-height: 1.5;
    color: white;
  }

  .RGBHSLChoose{
    position: absolute;
    margin-top:10vh;
    margin-left: 25vw;
  }

  .RGB, .HSL{
    position: absolute;
    width: 30vw;
    display: flex;
    margin-top: 9.2vh;
    margin-left: 40vw;
  }

  .RGBIncreValue, .HSLIncreValue{
    position: absolute;
    width: 30vw;
    margin-left: 75vw;
    margin-top: 15vh;
    display: flex;
    flex-direction: column;
    color: white;
  }

  .changeTime{
    position: absolute;
    color: white;
    margin-left: 75vw;
    margin-top: 8vh;
    display: flex;
    flex-direction: column;
  }
</style>
