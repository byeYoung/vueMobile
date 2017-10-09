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
Vue.directive('drag',function (el) {
  el.onmousedown=function (e) {
    let strX=e.pageX-this.offsetLeft;
    let strY=e.pageY-this.offsetTop;
    document.onmousemove=function (e) {
      el.style.left=e.pageX-strX+"px";
      el.style.top=e.pageY-strY+"px";
    };
    document.onmouseup=function () {
      document.onmousemove=document.onmouseup=null;
    }
  }
});
