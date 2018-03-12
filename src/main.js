
import Vue from 'vue'
import JsEncrypt from 'jsencrypt/bin/jsencrypt'
import App from './App'
import router from './router'
import $ from 'jquery'
import axios from 'axios'
import VueBus from 'vue-bus';
import store from './vuex/store'
import {} from './directive/directive'
Vue.prototype.http =axios;
Vue.prototype.JsEncrypt = JsEncrypt
Vue.config.productionTip = false;

new Vue({
  el: '#app',
  router,
  $,
  store,
  axios,
  VueBus,
  template: '<App/>',
  components: { App }
});
