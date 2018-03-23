<template>
  <div class="login">
    <div class="loginContainer">
      <!--个人和企业登录form-->
      <div class="login-left">
        <!--登录框-->
        <div class="loginForm">
          <div class="loginTitle">
            <p>个人登录</p>
            <p>企业登录</p>
          </div>
          <!--个人登录-->
          <div class="perLogin">
            <ul class="passport_ul">
              <li>
                <input id="loginname" v-model="userName"  type="text" size="20" maxlength="20"  value=""  placeholder="请输入用户名/手机号"/>
              </li>
              <li>
                <input id="password" v-model="password" type="password" size="20" maxlength="20"  value="" placeholder="请输入密码" />
              </li>
              <li>
                <check-code v-on:checkNewCode="getDatas"></check-code>
              </li>
              <li class="logi">
                <button type="button" @click="userLogin()">登录</button>
              </li>
              <li>
                <div class="enrolled">
                  <span>登录遇到问题？<a href="" class="forget fs14">找回密码</a></span>
                  <a href="#" class="fr" style="font-size:14px; line-height:40px;">免费注册&gt;&gt;</a>
                </div>
              </li>
            </ul>
          </div>
          <!--企业登录-->
          <div class="comLogin">

          </div>
        </div>
      </div>
      <!--登录配图-->
      <div class="login-right"></div>
    </div>
  </div>
</template>

<script>
  import checkCode from '../../components/checkCode/checkCode.vue'
  import { phtservice } from '../../assets/js/phtservice'
  import {fun} from '../../assets/js/fun'
  import { mapState, mapGetters, mapActions} from 'vuex'
export default {
  data () {
    return {
      isa: 0,
      userName:'18809596672',//个人登录的用户名
      password:'19900617236X',//个人登录的密码
      goFocus:'',
      flag:0
    }
  },
  computed:{
//    从 store 实例中读取状态最简单的方法就是在计算属性中返回某个状态
//    mapState 函数返回的是一个对象 以使我们可以将最终对象传给 computed 属性
//    ...mapState([loginStatus, userInfo])
    ...mapGetters([
      'loginStatus','userInfo'])
  },
  methods: {
    ...mapActions({setUserInfo:'setUserInfo'}),//引用方法
    getDatas:function (getData) {
      this.flag = getData
    },
    userLogin:function () {
      if(!this.userName) {
        alert("手机号不能为空")
        this.userName = ''
      }else if(!phtservice.mobileReg(this.userName)){
        alert("手机号格式不正确")
        this.userName = ''
      }else if(!this.password){
        alert("密码不能为空")
        this.password = ''
      }else if(this.flag == '0'){
        alert("请输入验证码")
      }else if(this.flag == '1'){
        alert("验证码错误")
      }else{
        let myUserName = this.userName
        //转成大写
        let mypwd = fun.CalcuMD5(this.password)
        //不进行转换
        let myNewPwd = fun.CalcuMD5lower(this.password)
        phtservice.globalPostData('/apis/xwuser/query/1.0/newLogin/1.0',phtservice.submitData({"IP":"0:0:0:0:0:0:0:1","LOGIN_CODE":myUserName, "NEWPASSWORD":myNewPwd, "PASSWORD":mypwd, "USER_TYPE":"1"})).then((data) => {
          let newData = data.result.main_data.data
          if(data.status =="00000000"){
            this.setUserInfo(newData)
            phtservice.getStore('userInfo')
            this.$router.push("/home")
          }else{
            alert(data.message)
          }
        })
      }


    },
    checknewCode (data) {
      this.flag = data
    }
  },
  components:{
    checkCode
  }
}
</script>

<style lang="less" scoped>

</style>
