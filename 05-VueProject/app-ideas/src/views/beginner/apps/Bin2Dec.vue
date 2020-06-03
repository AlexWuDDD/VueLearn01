<template>
  <div id="Bin2Dec">
    <h2>Bin2Dec</h2>
    <BackButton path="/beginner" color="green"></BackButton>
    <div class="wrapper">
      <el-form ref="form"  label-width="8em">
        <el-form-item label="请输入二进制数">
          <el-input placeholder="请输入二进制数" v-model="binaryInput" @input="checkInput">{{binaryInput}}</el-input>
        </el-form-item>
        <el-form-item label="十进制结果">
          <el-input readonly v-model="decimalOutput">{{decimalOutput}}</el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="ConvertClick" :disabled="buttonDisabled">Convert</el-button>
          <el-button @click="ResetClick">Reset</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
  import BackButton from "components/content/BackButton";
  export default {
    name: "Bin2Dec",
    data(){
      return{
        binaryInput: '',
        decimalOutput: '',
        buttonDisabled: true,
      }
    },
    components:{
      BackButton,
    },
    methods:{
      ConvertClick(){
        console.log("Convert Clicked");
        console.log("BinaryInput:" + this.binaryInput);
        console.log("DecimalOutput:" + this.decimalOutput);
        this.calculateDecimal();
      },
      ResetClick(){
        console.log("Reset Clicked");
        this.binaryInput = '';
        this.decimalOutput = '';
      },
      checkInput(){
        console.log("Inputing is: " + this.binaryInput);
        let pattern = new RegExp(/^[0|1]*$/);
        console.log(pattern.test(this.binaryInput));
        if(!pattern.test(this.binaryInput)){
          this.$notify.error({
            title: '错误',
            message: '请输入0或1的二进制数',
            duration: 1000
          });
          this.buttonDisabled = true;
        }
        else{
          if(!this.binaryInput.length){
            this.buttonDisabled = true;
          }
          else {
            this.buttonDisabled = false;
          }
        }
      },
      calculateDecimal(){
        let len = this.binaryInput.length;
        let result = 0;
        for(let i = 0; i < len; ++i){
          result += Math.pow(2, i) * Number(this.binaryInput[len-1-i]);
        }
        this.decimalOutput = result;
      }
    },
  }
</script>

<style scoped>
  #Bin2Dec{
    width: 100vw;
    height: 100vh;
    background: #1a1a1a;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .wrapper{
    margin: 50px;
  }

</style>
