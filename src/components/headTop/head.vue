<template>
  <div class="head">
    <div class="headContainer">
      <span class="headTel">欢迎使用金梧桐互联网金融信息中介服务平台！ 客服电话: 400-6699-068</span>
      <ul class="loginInfo">
        <li v-if="!loginUp" class="registerIn">
            <router-link to="/home">
              <span>注册</span>
            </router-link>
        </li>
        <li v-if="!loginUp" class="loginIn">
          <router-link to="/login">
            <span>登录</span>
          </router-link>
        </li>
        <li v-if="loginUp" class="sign">
          <span>签到</span>
        </li>
        <li v-if="loginUp" class="sayHi">
          <span>您好，<b>{{userName}}</b></span>
        </li>
        <li v-if="loginUp" class="loginOut">
          <router-link to="/home">
            <span>退出登录</span>
          </router-link>
        </li>
        <li class="download">
          <router-link to="/home">
            <span>下载客户端</span>
          </router-link>
        </li>
        <li class="oldVersion">
          <a href="https://www.phtfdata.com/oldweb">
            <span>回旧版</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        loginUp:false,
        userName:'小胡'
      }
    },
    methods: {

    }
  }
</script>

<style lang="less" scoped>
  @import '../../assets/css/common.css';
  .head{
    width:100%;
    height:30px;
    line-height: 30px;
    background-color: #000;
  }
  .headContainer{
    width:1000px;
    margin:0 auto;
  }
  .headTel{
    float:left;
    color:#fff;
  }
  .loginInfo{
    float:right;
  }
  .loginInfo li{
    float:left;
    padding:0 10px;
    cursor: pointer;
  }
  .loginIn{
    margin-left:10px;
  }
  .loginIn,.registerIn,.loginOut{
    background-color: #2c9cc6;
  }
  .loginIn span,.registerIn span,.loginOut span{
    color:#fff;
  }
  .download{
    color: #fff;
  }
  .download span{
    color:#fff;
  }
  .oldVersion{
    background-color: #ee7c35;
  }
  .oldVersion span{
    color: #fff;
  }
  li.sayHi{
    color:#fff;
  }
  li.sayHi b{
    color:#f1af1b;
  }
  .sign{
    background: url("../../assets/images/index-qd.png") no-repeat left;
    color:#fff;
  }
  .sign span{
    padding-left:30px;
  }
  .sign:hover{
    background: url("../../assets/images/index-qd1.png") no-repeat left;
    color:#2c9cc6;
  }
</style>
