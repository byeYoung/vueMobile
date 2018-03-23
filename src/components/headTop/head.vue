<template>
  <div class="head">
    <div class="headContainer">
      <span class="headTel">欢迎使用金梧桐互联网金融信息中介服务平台！ 客服电话: 400-6699-068</span>
      <ul class="loginInfo">
        <li v-if="!loginStatus" class="registerIn">
            <router-link to="/perRegist">
              <span>注册</span>
            </router-link>
        </li>
        <li v-if="!loginStatus" class="loginIn">
          <router-link to="/login">
            <span>登录</span>
          </router-link>
        </li>
        <li v-if="loginStatus" class="sign">
          <span>签到</span>
        </li>
        <li v-if="loginStatus" class="sayHi">
          <span>您好，<b>{{userInfo[0].REAL_NAME}}</b></span>
        </li>
        <li v-if="loginStatus" class="loginOut" @click="loginOut">
          <router-link to="/home">
            <span>退出登录</span>
          </router-link>
        </li>
        <li class="download">
          <router-link to="/download">
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
  import  {phtservice} from '../../assets/js/phtservice'
  import { mapState, mapGetters, mapActions} from 'vuex'
  export default {
    data () {
      return {
        userInfo:null,
      }
    },
    computed: {
      ...mapGetters([
        'loginStatus'])
    },
    methods: {
      ...mapActions({setSignOut:'setSignOut'}),
      init: function () {
        this.userInfo = JSON.parse(phtservice.getStore('userInfo'))
      },
      loginOut:function () {
        this.setSignOut()
      }
    },
    created () {
      this.init()
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
