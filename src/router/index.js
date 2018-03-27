import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//首页
const home = resolve => require(['../pages/home/home.vue'], resolve);
//登录
const login = resolve => require(['../pages/login/login.vue'], resolve);
//账户中心
const account = resolve => require(['../pages/account/account.vue'], resolve);
//投资频道
const invest = resolve => require(['../pages/invest/invest.vue'], resolve);
//关于我们
const about = resolve => require(['../pages/about/about.vue'], resolve);
//安全保障
const safety = resolve => require(['../pages/safety/safety.vue'], resolve);
//信息披露
const information = resolve => require(['../pages/information/information.vue'], resolve);
//个人注册
const perRegist = resolve => require(['../pages/regist/perRegist.vue'], resolve);
//下载客户端
const download = resolve => require(['../pages/download/download.vue'], resolve);

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

    },
    {
      path: '*/about',
      component: about,

    },
    {
      path: '*/invest',
      component: invest,

    },
    {
      path: '*/account',
      component: account,

    },
    {
      path: '*/safety',
      component: safety,

    },
    {
      path: '*/information',
      component: information,

    },
    {
      path: '*/download',
      component: download,

    },
    {
      path: '*/perRegist',
      component: perRegist,

    },


  ]
});
export default router;
