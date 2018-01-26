<template>
  <div class="login">
    <div class="loginContainer">
      <div class="loginBox clearfix">
        <!-- 登录框 -->
        <div class="loginLef">
          <ul class="loginTitle clearfix">
            <li>个人登录</li>
            <li>企业登录</li>
          </ul>
          <div class="loginContent">
            <ul class="loginUl clearfix">
              <li>
                <input id="loginName" type="text" size="20" maxlength="20" value="" placeholder="请输入用户名/手机号" />
              </li>
              <li>
                <input id="password" type="password" size="20" maxlength="20" placeholder="请输入密码" />
              </li>
              <li>
                <input id="code" type="text" placeholder="验证码" size="6" maxlength="6" />
                <span>
                  <img src="../../assets/images/login/queryCheckCode.jpg" />
                </span>
              </li>
              <li>
                <a href="javascript:void(0)">登录</a>
              </li>
              <li>
                <div class="loginProblem">
                  <span>登录遇到问题？</span>
                  <router-link to="/login">
                    <span>找回密码</span>
                  </router-link>
                  <router-link to="/login">
                    <span>免费注册</span>
                  </router-link>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <!-- 登录图片 -->
        <div class="lofinRight">
          <img src="../../assets/images/login/loginImg.png" />
        </div>
      </div>
      <div class="loginBottom">
        <p>©2017金梧桐 All Rights Reserved &nbsp;&nbsp;| &nbsp;&nbsp;北京普惠通数据信息技术有限公司</p>
        <p>
          <a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11010802025070">
            <img src="../../assets/images/beian.png" />
            <span>京公网安备 11010802025070号</span>
          </a>&nbsp;&nbsp;|&nbsp;&nbsp;
          <span> 京ICP备14046794号 -1</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.login{
  width:100%;
  height: 100%;
  background-color:#fafafa;
}
.loginContainer{
  width:1000px;
  margin:0 auto;
  padding-top: 30px;
}
.loginLef{
  width: 410px;
  height: 400px;
  float: left;
  background-color: #fff;
  margin-left: 80px;
}
.loginTitle{
  width: 410px;
  height: 58px;
  border: 1px solid #d2d2d2;
  border-bottom: none;
}
.loginTitle li{
  float: left;
  text-align: center;
  height: 58px;
  width: 50%;
  line-height: 58px;
  font-size:18px;
  color: #444;
}
.lofinRight{
  float: right;
  margin-left: 70px;
  margin-top: 62px;
}
.loginBottom{
  width: 100%;
  padding-top: 23px;
}
.loginBottom p{
  text-align: center;
  line-height: 30px;
  font-size: 14px;
}
.loginBottom p img{
  vertical-align: middle;
}
.loginContent{
  width: 100%;
  margin: 0 auto;
  border: 1px solid #d2d2d2
}
.loginContent ul{
  width: 306px;
  margin: 0 auto;
}
.loginUl li{
  height: 46px;
  line-height: 46px;
  margin-top:24px;
}
.loginUl li input:checked{
  border: 1px solid red;
}
.loginUl li input{
  width: 294px;
  height: 44px;
  line-height: 44px;
  border:1px solid #ccc;
  padding-left: 10px;
  color: #666;
  font-size: 16px;
}















</style>
