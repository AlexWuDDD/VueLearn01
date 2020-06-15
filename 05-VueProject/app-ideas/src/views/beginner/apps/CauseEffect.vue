<template>
  <div id="CauseEffect">
    <BackButton path="/beginner"></BackButton>
    <div class="container">
      <ul class="nameList">
        <li v-for="(value, index) in testData" @click="moreInfo(index)">
          <div class="info-wrapper">
            <i class="fas fa-angle-right" v-if="!isActive[index]"></i>
            <i class="fas fa-angle-down" v-else></i>
            <span class="title">{{value.name}}</span>
          </div>
          <div v-show="isActive[index]" class="info">
            <table>
              <tr>
                <td>Full Name</td>
                <td>{{value.name}}</td>
              </tr>
              <tr>
                <td>Address</td>
                <td>{{value.address}}</td>
              </tr>
              <tr>
                <td>Telephone</td>
                <td>{{value.telephone}}</td>
              </tr>
              <tr>
                <td>Birthday</td>
                <td>{{value.birthday}}</td>
              </tr>
            </table>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import BackButton from "components/content/BackButton";
  import {people} from "common/testDataforCauseEffect";
  export default {
    name: "CauseEffect",
    components:{
      BackButton,
    },
    data(){
      return{
        testData :people,
        isActive: [],
      };
    },
    created() {
      for(let i = 0; i < this.testData.length; ++i){
        this.isActive.push(false);
      }
    },
    methods:{
      moreInfo(index){
        this.$set(this.isActive, index, !this.isActive[index]);
      },
    }
  }
</script>

<style scoped>
  #CauseEffect{
    width: 100vw;
    height: 100vh;
    background: rgba(0,0,0,.5);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  #CauseEffect .container{
    width: 80%;
    height: 80%;
    background: #444444;
    position: relative;
  }

  #CauseEffect .container .nameList{
    list-style: none;
    position: relative;
  }

  .info-wrapper{
    height: 2em;
    line-height: 2em;
    font-size: 2em;
    position: relative;
  }

  .info-wrapper i{
    width: 0.5em;
  }
  .info-wrapper .title{
    position: absolute;
    transform: translate(15%, -4%);
  }

  .info{

  }
</style>
