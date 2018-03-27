import md5 from 'js-md5'

let fun = {}
/*
* md5加密
* */
fun.CalcuMD5 = function (pwd) {
  var totleStr = "WUJIANDONG20150101PHTFDATA";
  pwd = pwd.toUpperCase();
  pwd = pwd.replace(/0/g, '~').replace(/1/g, '$').replace(/2/g, '!').replace(
    /3/g, '@').replace(/4/g, ':').replace(/5/g, ']').replace(/6/g, '[')
    .replace(/7/g, '{').replace(/8/g, '}').replace(/9/g, '`');
  totleStr = totleStr.substring(0, totleStr.length - pwd.length);
  pwd = totleStr + pwd;
  pwd = md5(pwd);
  return pwd;
}
fun.CalcuMD5lower = function (pwd) {
  var totleStr = "WUJIANDONG20150101PHTFDATA";
  pwd = pwd.replace(/0/g, '~').replace(/1/g, '$').replace(/2/g, '!').replace(
    /3/g, '@').replace(/4/g, ':').replace(/5/g, ']').replace(/6/g, '[')
    .replace(/7/g, '{').replace(/8/g, '}').replace(/9/g, '`');
  totleStr = totleStr.substring(0, totleStr.length - pwd.length);
  pwd = totleStr + pwd;
  pwd = md5(pwd);
  return pwd;
}

// 密码正则表示式：密码长度8-16位，必须包含字母和数字；
fun.testPwd = function (pwd) {
  var reg_password = /^(?=.*[a-zA-Z0-9].*)(?=.*[a-zA-Z\\W].*)(?=.*[0-9\\W].*).{8,16}$/;
  return reg_password.test(pwd)
}
//验证电话号码
//test() 方法用于检测一个字符串是否匹配某个模式.
fun.checkMobile = function(mobile) {
  var reg_mobile = /^0?(1[3-9][0-9])[0-9]{8}$/;
  return reg_mobile.test(mobile)
}
//去除字符串的前后空格
fun.trim = function (inputStr) {
  return inputStr.replace(/(^\s*) | (\s*$)/g, '')
}
export {fun}
