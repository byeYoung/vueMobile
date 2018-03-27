//自定义指令
import Vue from 'vue'

//v-title   头部标题
Vue.directive('title', {
  inserted: function (el, binding) {

    if(typeof AlipayJSBridge!='undefined'){
      AlipayJSBridge.call('setTitle', {
        title: binding.value,
      });
    }else{
      document.title = binding.value
    }
  }
});
//v-focus   自动获取焦点
//注册一个全局自定义指令 `v-focus`
Vue.directive('focus', {
  inserted: function (el) {
    el.focus()
  }
})
