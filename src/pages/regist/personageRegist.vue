<template lang="html">
  <div class="personageRegist" v-title="'个人注册'">

  <div class="login-form">
            <form action="#">
                <div class="user-name common-div">

                    <input type="text" v-model="username" placeholder="手机号" />
                </div>
                <div class="user-pasw common-div">

                    <input type="password" v-model="password" placeholder="密码" />
                </div>
                <div class="user-code common-div">

                    <input type="text" style="width: 50%;" v-model="verificode" placeholder="验证码" />
                    <span class="verifi-code" @click="getVerifiCode" v-show="!sendCode">
                        获取验证码
                    </span>
                    <span class="verifi-code readonly" v-show="sendCode">
                        {{timeOut}}秒重新获取
                    </span>
                </div>
                <div class="login-btn" @click="regist">注册</div>
            </form>
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
       timeOut: 60
   }

 },
 components:{
 loop
 }

}
</script>

<style scoped>
@import '../../assets/css/common.css';

.login-form{
      width:600px;
      height:auto;
      margin:0 auto;
    }

  .common-div{
          width:100%;
          height:80px;
          overflow:hidden;
          border-radius:4px;
          margin-bottom: 50px;
        }
  input{
          float:left;
          line-height: 80px;
          outline:none;
          font-size:16px;

          }
    .verifi-code {
          display: inline-block;
          width:200px;
          height:80px;
          line-height:80px;
          background: #0bd38a;
          color: #fff;
          text-align: center;
          padding-left: 20px;
          }
      .readonly {
          background: #eee;
          color: #555;
          }

      .user-name,.user-pasw,.user-code{
          background-color:rgba(255,255,255,0.1);
      }
      .login-btn{
          background-color:#0bd38a;
          color:#fff;
          font-size:20px;
          text-align:center;
          height:100px;
          line-height:100px;
          margin-bottom: 50px;
          border-radius:4px;
      }

</style>
