<template>
  <div class="nav">
    <div class="nav_container">
      <div class="pic_box">
        <img src="../../assets/images/logo.png" alt="">
      </div>
    <div>
      <ul>
        <li><router-link :to="'home'">首页</router-link></li>
        <li><router-link :to="'safety'">安全保障</router-link></li>
        <li><router-link :to="'invest'">投资频道</router-link></li>
        <li><router-link :to="'account'">账户管理</router-link></li>
        <li><router-link :to="'information'">信息披露</router-link></li>
        <li><router-link :to="'about'">关于我们</router-link></li>
      </ul>
    </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
      }
    },
    mounted(){
    },
    methods:{

    }
}
</script>

<style lang="less" scoped>
  .nav{
    height: 100%;
    width: 100%;
    background: #fff;
    border-bottom: 1px solid #ccc;

  }
  .nav_container{
    height: 82px;
    width: 1000px;
    margin: 0 auto;
    background: #fff;
    line-height: 82px;
    font-family: '微软雅黑';
    font-size: 14px;
  }
  .nav_container ul li{
    display: inline-block;
    width:90px;
    text-align: center;
    a{
      font-size: 17px;
      color: #6e6e6e;
    }
    .router-link-active{
      color: rgb(153, 3, 2);
    }
  }
  .nav_container ul li:hover a{
    color: rgb(153, 3, 2);
  }
  .nav_container ul{
    float: right;
  }
  .nav_container ul li span{
    display: block;
    height: 45px;
    cursor: pointer;
  }
  .nav_container .active{
    color: rgb(153, 3, 2);
  }
  .pic_box{
    float: left;
    img{
      vertical-align:middle;
    }
  }

</style>
