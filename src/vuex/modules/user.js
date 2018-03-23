import * as types from '../types'
import { phtservice } from '../../assets/js/phtservice'

const state = {
    // 用户登录状态
    loginStatus: JSON.parse(phtservice.getStore('loginStatus')) || false,
    // 用户登录信息
    userInfo: JSON.parse(phtservice.getStore('userInfo')) || {},
    // 用户数据信息
    userData: [],
    //保存导航当前值
    navStatus:null
}

//改变state状态
const actions = {
  /**
   * 导航参数
   */
   setNavStatus( { commit }, navdata ){
        commit(types.COM_GETNAV_STATUS, navdata)

   },
    /**
     * 用户登录
     */
    setUserInfo({ commit }, res) {
        phtservice.setStore('userInfo', JSON.stringify(res))
        phtservice.setStore('loginStatus', true)
        commit(types.SET_USER_INFO, res)
        commit(types.SET_LOGIN_STATUS, true)
    },

    /**
     * 退出登录
     */
    setSignOut({ commit }) {
        phtservice.removeStore('loginStatus')
        phtservice.removeStore('userInfo')
        commit(types.SET_LOGIN_STATUS, false)
        commit(types.SET_USER_INFO, {})
    },

    /**
     * 请求用户信息
     */
    getUserData({ commit }, id) {
        //commit 提交的是方法触发状态变更   提交mutations
        //通过提交 mutation 的方式追踪到状态的变化
        commit(types.COM_LOADING_STATUS, true)
        api.UserInfo(id)
            .then(res => {
                commit(types.COM_LOADING_STATUS, false)
                commit(types.GET_USER_DATA, res.data)
            })
    }
}

const getters = {
    userData: state => state.userData,
    loginStatus: state => state.loginStatus,
    userInfo: state => state.userInfo,
    navStatus:state =>state.navStatus
}

const mutations = {
    [types.COM_GETNAV_STATUS] ( state, navdata){
      state.navStatus = navdata

    },
    [types.SET_USER_INFO](state, res) {
        state.userInfo = res
    },

    [types.SET_LOGIN_STATUS](state, status) {
        state.loginStatus = status
    },

    [types.GET_USER_DATA](state, res) {
        state.userData = res
    }

}

export default {
    state,
    actions,
    getters,
    mutations
}
