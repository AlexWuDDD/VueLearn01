<template>
  <div id="CSV2JSON">
    <BackButton></BackButton>
    <div class="ChangeWrapper">
      <div class="csvWrapper">
        <label for="getCSVFile">Choose CSV file</label>
        <input id="getCSVFile" type="file">
        <label for="csvContent">CSV Content</label>
        <textarea id="csvContent" rows="5" cols="33"></textarea>
      </div>
      <button id="changeBtn">CSV2JSON</button>
      <div class="jsonWrapper">
        <label for="jsonContent">CSV Content</label>
        <textarea id="jsonContent" rows="5" cols="33" readonly></textarea>
        <button id="jsonSaveBtn">Save as ...</button>
      </div>
    </div>
  </div>
</template>

<script>
  import BackButton from "components/content/BackButton";

  export default {
    name: "CSV2JSON",
    components:{
      BackButton,
    }
  }
</script>

<style scoped>
  #CSV2JSON{
    width: 100vw;
    height: 100vh;

    background: linear-gradient(#555555 25%, #444444 75%);
    color: white;
  }

  .ChangeWrapper{
    display: flex;
    flex-direction: column;
  }

  .csvWrapper, .jsonWrapper{
    display: flex;
    flex-direction: column;
    margin: 10% 25%;
  }

  #changeBtn{
    width: 25vw;
    height: 50px;
    margin: auto;

    padding: /*6px 16px*/ .3em .8em;
    border: 1px solid #446d88;
    /*background: #58a linear-gradient(#77a0bb, #58a);*/
    background: #58a linear-gradient(hsla(0, 0%, 100%, .5), transparent);
    border-radius: /*4px*/.4em;
    box-shadow: /*0 1px 5px gray*/ 0 .05em .25em rgba(0, 0, 0,.5);
    color: white;
    text-shadow: /*0 -1px 1px #335166*/ 0 -.05em .05em rgba(0, 0, 0,.5);
    font-size: 125%; /*假设父级的字号是16px, 20px*/
    line-height: 1.5;
  }

  #jsonSaveBtn{
    width: 15vw;
    height: 50px;
    margin: auto;

    padding: /*6px 16px*/ .3em .8em;
    border: 1px solid #665555;
    /*background: #58a linear-gradient(#77a0bb, #58a);*/
    background: #665555 linear-gradient(hsla(0, 0%, 100%, .5), transparent);
    border-radius: /*4px*/.5em;
    box-shadow: /*0 1px 5px gray*/ 0 .05em .25em rgba(0, 0, 0,.5);
    color: white;
    text-shadow: /*0 -1px 1px #335166*/ 0 -.05em .05em rgba(0, 0, 0,.5);
    font-size: 125%; /*假设父级的字号是16px, 20px*/
    line-height: 1.5;
  }

</style>
