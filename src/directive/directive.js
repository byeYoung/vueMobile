//自定义指令
import Vue from 'vue'

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
