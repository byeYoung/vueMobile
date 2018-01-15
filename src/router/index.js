
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);
const home = resolve => require(['../pages/home/home.vue'], resolve);
const about = resolve => require(['../pages/about/about.vue'], resolve);
const safety = resolve => require(['../pages/safety/safety.vue'], resolve);
const router = new VueRouter({
  base: 'phtPc',
  mode: 'history',
  saveScrollPosition: true,
  routes: [
    {
      path: '*',
      component: home,

    },
    {
      path: '*/about',
      component: about,

    },
    {
      path: '*/safety',
      component: safety,

    },


  ]
});
export default router;
