<template>
  <div id="Calculator">
    <back-button path="/beginner"></back-button>
    <div class="box">
      <div class="display">
        <span>{{displayResult}}</span>
      </div>
      <div class="panel">
        <div class="line">
          <button @click="setOper('AC')" style="width: 10.5em">AC</button>
          <button @click="setOper('+/-')">+/-</button>
          <button @click="setOper('/')">/</button>
        </div>
        <div class="line">
          <button @click="setNum(7)">7</button>
          <button @click="setNum(8)">8</button>
          <button @click="setNum(9)">9</button>
          <button @click="setOper('*')">*</button>
        </div>
        <div class="line">
          <button @click="setNum(4)">4</button>
          <button @click="setNum(5)">5</button>
          <button @click="setNum(6)">6</button>
          <button @click="setOper('-')">-</button>
        </div>
        <div class="line">
          <button @click="setNum(1)">1</button>
          <button @click="setNum(2)">2</button>
          <button @click="setNum(3)">3</button>
          <button @click="setOper('+')">+</button>
        </div>
        <div class="line">
          <button class="btn0" @click="setNum(0)">0</button>
          <button @click="setOper('=')">=</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import BackButton from "components/content/BackButton";
  import {EnumOperator} from "common/enumOpertaor";
  export default {
    name: "Calculator",
    data(){
      return{
        inputingNum: false,
        result: 0,
        num: 0,
        oper: null,

      }
    },
    computed:{
      displayResult(){
        let ret = this.inputingNum?this.num:this.result;
        return String(ret).substring(0, 8);
      }
    },
    components:{
      BackButton,
    },
    methods:{
      setNum(num){
        if(!this.inputingNum) {
          this.inputingNum = true;
          this.num = 0;
        }
        let numStr = String(this.num);
        if(numStr.length < 8) {
          numStr += String(num);
        }
        this.num = Number(numStr);
      },
      setOper(oper){
        switch (oper) {
          case EnumOperator.RESET:
            this.num = 0;
            this.result = 0;
            this.oper = null;
            break;
          case EnumOperator.PosORNag:
            if(this.inputingNum){
              this.num = 0 - this.num;
            }
            else{
              this.result = 0 - this.result;
              this.oper = null;
              this.num = this.result;
            }
            break;
          case EnumOperator.EQL:
            this.getResult();
            this.oper = null;
            this.num = this.result;
            break;
          case EnumOperator.ADD:
            this.getResult();
            this.oper = EnumOperator.ADD;
            break;
          case EnumOperator.SUB:
            this.getResult();
            this.oper = EnumOperator.SUB;
            break;
          case EnumOperator.MUL:
            this.getResult();
            this.oper = EnumOperator.MUL;
            break;
          case EnumOperator.DIV:
            this.getResult();
            this.oper = EnumOperator.DIV;
            break;
          default:
            break;
        }
      },
      getResult(){
        switch(this.oper) {
          case EnumOperator.ADD:
            this.result += this.num;
            break;
          case EnumOperator.SUB:
            this.result -= this.num;
            break;
          case EnumOperator.MUL:
            this.result *= this.num;
            break;
          case EnumOperator.DIV:
            if (this.num === 0) {
              this.result = "Error";
            } else {
              this.result /= this.num;
            }
            break;
          default:
            this.result = this.num;
        }
        this.inputingNum = false;
      },
    }
  }
</script>

<style scoped>
  #Calculator{
    width: 100vw;
    height: 100vh;
    background: #909399;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  #Calculator .box{
    width: 500px;
    height: 700px;
    background: #606266;

    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 15px;
  }

  #Calculator .box .display{
    margin-top: 25%;
    margin-bottom: 10%;
    width: 80%;
    height: 15%;
    border: 5px #909399 solid;
    border-radius: 10px;

    display: flex;
    align-items: center;
    justify-content: right;
  }
  #Calculator .box .display span{
    font-size: 4em;
    color: #909399;
    margin-right: .2em;
  }

  #Calculator .box .panel {
    border: 5px #909399 solid;
    border-radius: 10px;
    width: 80%;
    height: 50%;

    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }

  #Calculator .box .panel .line{
    display: flex;
    justify-content: space-evenly;
  }

  #Calculator .box .panel .line button{
    width: 5em;
    height: 3.5em;
    border: none;
    background-color: #3e392f;
    color: #909399;
    font-weight: bold;
    border-radius: 10px;
    outline: none;
  }

  #Calculator .box .panel .line button:hover{
    background: #1b1813;
  }

  #Calculator .box .panel .line .btn0{
    width: 17em;
  }

</style>
