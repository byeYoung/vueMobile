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

export {fun}
