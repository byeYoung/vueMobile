
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//首页
const home = resolve => require(['../pages/home/home.vue'], resolve);
//登录
const login = resolve => require(['../pages/login/login.vue'], resolve);
//个人登录
const perlogin = resolve => require(['../pages/login/perlogin.vue'], resolve);
//企业登录
const enterlogin = resolve => require(['../pages/login/enterlogin.vue'], resolve);
//关于我们
const about = resolve => require(['../pages/about/about.vue'], resolve);
//安全保障
const safety = resolve => require(['../pages/safety/safety.vue'], resolve);
//个人注册
const personageRegist = resolve => require(['../pages/regist/personageRegist.vue'], resolve);

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
      path: '*/login',
      component: login,
      children: [
        {
          path: '*/login/perlogin',
          component: perlogin,
        },{
          path: '*/login/enterlogin',
          component: enterlogin,
        }
      ]
    },
    {
      path: '*/about',
      component: about,

    },
    {
      path: '*/safety',
      component: safety,

    },
    {
      path: '*/personageRegist',
      component: personageRegist,

    },


  ]
});
export default router;
