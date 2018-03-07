import Vue from 'vue'
import Vuex from 'vuex'

import user from './modules/user'

import com from './modules/com'
Vue.use(Vuex)
const debug = process.env.NODE_EVN !== 'production' && process.env.NODE_EVN !== 'production-runtime'

export default new Vuex.Store({
  modules: {
  //用户信息
   //公共信息
  },
<<<<<<< HEAD
  strict: debug,
=======
>>>>>>> 460dec9989f9231c358ea728fe308c50b7296acf
})
