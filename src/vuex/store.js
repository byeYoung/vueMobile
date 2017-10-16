import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    projects: {
    },
    b:'',
    echo:null

  },
  actions: {
    changeDate:function ({ commit }) {
      axios.get('http://www.tuling123.com/openapi/api?info=%E4%BD%A0%E5%A5%BD&key=317aefe222b240dd86b2d25d3af66cde').then((data) => {
        commit('init_list',{list:data})

      }, (err) => {
        console.log(err)
      })
    },
    msgFn({ commit, state }, msg) {
      state.b = msg;
      commit('add')

    }
  },
  mutations: {
    init_list(state, list) {
      state.projects = list
    },
    add(state,n) {}
  },
  getters: {
    openProjects: state => {
      return state.projects.filter(project => !project.completed)
    }
  }
});
export default store
