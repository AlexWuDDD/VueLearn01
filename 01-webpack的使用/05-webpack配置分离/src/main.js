//使用vue进行开发
import Vue from 'vue'
import App from './vue/App.vue'

new Vue({
  el: '#app',
  template:`<App/>`,
  components:{
    App
  },
});

document.writeln('<button>按钮</button>')