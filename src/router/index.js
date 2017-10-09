import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/phtIndex.vue'
import Data from '@/pages/finddata.vue'
import aboutUS from '@/pages/aboutUs'

Vue.use(Router);

export default new Router({
  mode:'hash',
  routes: [
    {
      path: '/phtMobile',
      component: Index
    },
    {
      path: "*",
      redirect: '/phtMobile'
    },
    {
      path:'/findData',
      component: Data
    },
    {
      path:'*/aboutUs',
      component: aboutUS
    }
  ]
})
