import Vue from 'vue'
import Vuex from 'vuex'

import user from './modules/user'
<<<<<<< HEAD
import com from './modules/com'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        user,
        com
    }
=======

Vue.use(Vuex)
const debug = process.env.NODE_EVN !== 'production' && process.env.NODE_EVN !== 'production-runtime'

export default new Vuex.Store({
  modules: {
    user,//用户信息
    com //公共信息
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
>>>>>>> 3da5c0ef830f134a1f18a569c120fdb31326c863
})
