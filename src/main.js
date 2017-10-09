
import Vue from 'vue'
import App from './App'
import router from './router'
import $ from 'jquery'
import axios from 'axios'
import store from './vuex/store'
import {} from './directive/directive'
Vue.prototype.http =axios;
Vue.config.productionTip = false;

new Vue({
  el: '#app',
  router,
  $,
  store,
  axios,
  template: '<App/>',
  components: { App }
});
