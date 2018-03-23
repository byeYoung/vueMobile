import Vue from 'vue'
import App from './App'
import  Jsrsasign,{KJUR,hex2b64} from 'jsrsasign'
import router from './router'
import $ from 'jquery'
import md5 from 'js-md5'
import axios from 'axios'
import VueBus from 'vue-bus';
import store from './vuex/store'
import {} from './directive/directive'
Vue.prototype.http =axios;
Vue.config.productionTip = false;

new Vue({
  el: '#app',
  Jsrsasign,
  md5,
  router,
  $,
  store,
  axios,
  VueBus,
  template: '<App/>',
  components: { App }
});
