<template>
  <div>
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
      <path d="M 0 15 q 16 -1 30 -5" stroke="darkgray" stroke-width="2" fill="none" />
      <rect x="30" width="15" height="15" style="fill:darkgray;stroke:darkgray;"/>
      <path d="M 75 15 q -16 -1 -30 -5" stroke="darkgray" stroke-width="2" fill="none" />
      <ellipse cx="37.5" cy="35" rx="10" ry="20" v-bind:fill=lightColor >
        <animate attributeType="CSS" attributeName="opacity"
                 :from="startTime" :to="toTime" :dur="durationTime"
                 repeatCount="indefinite" />
      </ellipse>
    </svg>
  </div>
</template>

<script>
  export default {
    name: "ChristmaxLight",
    props:{
      lightColor: String,
      startTime: {
        type: Number,
        default: 0.1,
      },
      toTime: {
        type: Number,
        default: 1,
      },
      durationTime:{
        type:Number,
        default:2
      }
    }
  }
</script>

<style scoped>
  svg{
    width: 75px;
    height: 75px;
  }

</style>
