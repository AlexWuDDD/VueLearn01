<template>
  <div id="CountdownWidget">
    <BackButton path="/beginner"></BackButton>
    <div>
      <h1>Countdown</h1>
      <div class="countdown-wrapper">
        <div class="countdown-item">
          {{this.state.days}}<span>days</span>
        </div>
        <div class="countdown-item">
          {{this.state.hours}}<span>hours</span>
        </div>
        <div class="countdown-item">
          {{this.state.minutes}}<span>minutes</span>
        </div>
        <div class="countdown-item">
          {{this.state.seconds}}<span>seconds</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import BackButton from "components/content/BackButton";
  import moment from 'moment';
  export default {
    name: "CountdownWidget",
    components:{
      BackButton,
    },
    props:{
      timeTillDate: undefined,
      timeFormat:{
        type: String,
        default(){
          return "MM DD YYYY, h:mm a";
        }
      },
    },
    data(){
      return{
        state:{
          days: undefined,
          hours: undefined,
          minutes: undefined,
          seconds: undefined,
        },
        interval: undefined,
      };
    },
    methods:{
      countdown(){
        const then = moment(this.timeTillDate, this.timeFormat);
        const now = moment();
        const diff = moment(then-now);
        this.state.days = diff.format('D');
        this.state.hours = diff.format('HH');
        this.state.minutes = diff.format('mm');
        this.state.seconds = diff.format('ss');

      },
    },
    mounted() {
      this.interval = setInterval(()=>{
        this.countdown();
      }, 1000);
    },
    destroyed() {
      if(this.interval){
        clearInterval(this.interval);
      }
    },
    // From StackOverflow: https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
    mapNumber(number, in_min, in_max, out_min, out_max) {
      return (
        ((number - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
      );
    },
    daysRadius(){
      return this.mapNumber(this.state.days, 30, 0, 0, 360);
    },
    hoursRadius(){
      return this.mapNumber(this.state.hours, 24, 0, 0, 360);
    },
    minutsRadius(){
      return this.mapNumber(this.state.minutes, 60, 0, 0, 360);
    },
    secondsRadius(){
      return this.mapNumber(this.state.seconds, 60, 0, 0, 360);
    }
  }

</script>

<style scoped>
  h1{
    letter-spacing: 2px;
    text-align: center;
    text-transform: uppercase;
  }

  .countdown-wrapper{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
  }

  .countdown-item{
    color: #111;
    font-size: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    line-height: 30px;
    margin: 10px;
    position: relative;
    width: 100px;
    height: 100px;
  }

  .countdown-item span{
    color: #333;
    font-size: 12px;
    font-weight: 600;
    text-transform: uppercase;
  }

</style>

