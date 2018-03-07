<template lang="html">
  <div class="personageRegist" v-title="'个人注册'">

  <div class="loginForm">
                <div class="registTitle">
                   <span>个人用户注册</span>
                </div>
                <div class="registCon">
                  <div class="userName">
                      <em>*</em><span>手机号码：</span>
                      <input type="text" v-model="username" placeholder="请输入手机号" />
                  </div>
                  <div class="userPaw">
                      <em>*</em><span>设置密码：</span>
                      <input type="password" v-model="password" placeholder="请输入密码" />
                  </div>
                  <div class="userPawReg">
                      <em>*</em><span>确认密码：</span>
                      <input type="password" v-model="passwordReg" placeholder="请输入确认密码" />
                  </div>
                  <div class="reName">
                    <span>推荐人手机号：</span>
                      <input type="text" v-model="reName" placeholder="请输入推荐人手机号" />
                  </div>
                  <div class="userCode">
                        <span class="code">
                          <em>*</em><span>手机号验证码：</span>
                        </span>

                      <input class="phoneCode" type="text" v-model="verificode" placeholder="手机验证码" />
                      <span class="verifiCode" @click="getVerifiCode" v-show="!sendCode">
                          获取验证码
                      </span>
                      <span class="verifiCode readonly" v-show="sendCode">
                          {{timeOut}}秒重新获取
                      </span>
                  </div>
                  <p class="regSelect">
                      <input id="checkBox" v-model="toggle" type="checkbox"  @change="checkAgree()"/><span>我同意《<a href="javascript:;">金梧桐注册协议</a>》 </span>
                  </p>
                  <div class="loginBtn" @click="regist">下一步</div>
                </div>

                <div class="regPic ">
                   <!-- <img src="../../assets/images/regist/zhucepeitu.png" alt=""> -->
                   <p>
                     <a href="javascript:;">企业用户注册	&gt;&gt;</a>
                   </p>
                </div>

        </div>



      </div>
</template>
<script>

export default {
  data(){
    return {
       username: '',
       password: '',
       verificode: '',
       rename:'',
       sendCode: false,
       timeOut: 60,
       toggle:false,
   }

 },
 methods:{
   checkAgree:function () {
     console.log(this.toggle)

   }

 },
 components:{

 }

}
</script>

<style scoped>
@import '../../assets/css/common.css';

.loginForm{
  width: 1000px;
  height: 530px;
  border: 1px solid #ccc;
  margin: 20px auto 20px auto;
  overflow: auto;
}
.registTitle{
  margin-top: 20px;
  width: 161px;
  height: 36px;
  line-height: 36px;
  color: #f7ba18;
  text-align: center;
  font-size: 18px;
  font-weight: 600;
  /* background: url(../../assets/images/regist/zhucutext.png) 0 0 no-repeat; */
}
.registCon{
  width: 496px;
  margin: 0 0 0 80px;
  float: left;
}
.registCon em{
  color: red;
  margin-right: 3px;
}
.loginForm input{
  width: 240px;
  padding: 8px 5px;
  margin: 18px 0 0 10px;
  border: 1px solid rgba(230, 230, 230);
}
.userCode .code{
  margin-left: -28px;
}
.reName span{
  margin-left: -20px;
}
.loginForm .phoneCode{
  width: 120px;
}
.verifiCode{
  display: inline-block;
  width: 104px;
  height: 42px;
  line-height: 42px;
  text-align: center;
  margin-left: 15px;
  background: rgb(237, 237, 237);
  cursor: pointer;
  border: 1px solid rgb(230, 230, 230);
}
.regPic{
  float: left;
}
.regPic a{
  font-size: 14px;
  color: #239bc8;
}
.regPic p{
  text-align: center;
}
#checkBox{
  margin-top: 0;
  width: 20px;
}
.regSelect{
  margin: 20px 0 0 -150px;
  text-align: center;
}
.regSelect a{
  color: #900;
}
.loginBtn{
  width: 248px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  font-size: 16px;
  color: #fff;
  padding: 0;
  border: 0;
  background: #c51110;
  float: left;
  text-decoration: none;
  border-radius: 4px;
  cursor: pointer;
  -moz-border-radius: 4px;
  -khtml-border-radius: 4px;
  -webkit-border-radius: 4px;
  margin: 20px 0 0 90px;
}


</style>
