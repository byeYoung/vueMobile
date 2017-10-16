<template>
  <div class="heard">
   <div class="heard_container">
     <div><span class="heard_start">欢迎使用金梧桐！客服电话：400-6699-068</span>
       <ul>
         <li>活动专区 <span>丨</span></li>
         <li>帮助中心 <span>丨</span></li>
         <li>联系我们 <span>丨</span></li>
         <li>签到 <span>丨</span></li>
         <li>活动专区 <span>丨</span></li>
         <li v-show="login">下载客户端 <span>丨</span></li>
       </ul>
     </div>

   </div>
    {{echo}}
  </div>
</template>

<script>
export default {
  props:{
    echo: String
  },
   data () {
    return {
    login:null
    }
},
  mounted(){
    this.login =sessionStorage.getItem('login');
  },

}
</script>

<style scoped>
  .heard{
    height: 30px;
    width: 100%;
    background: #000;
  }
  .heard_container{
    height: 100%;
    width: 1000px;
    margin: 0 auto;
    color: #fff;
    line-height: 30px;
    font-family: "微软雅黑 ";
  }
  .heard_start{
    float: left;
  }
  .heard_container ul li{
    display: inline-block;
    cursor: pointer;
  }
  .heard_container ul{
    float: right;
  }


</style>
