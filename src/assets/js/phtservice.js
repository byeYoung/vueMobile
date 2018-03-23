//公共方法
import Jsrsasign,{KJUR,hex2b64} from 'jsrsasign';
import axios from 'axios'
let phtservice ={};

/*
* 手机号码的正则表达式
* */
phtservice.mobileReg = function (userName) {
  let reg = /^0?(1[3-9][0-9])[0-9]{8}$/
  return reg.test(userName)
}
/**
 * get请求
 */
phtservice.globalGetData =function (url) {
  let deferred = $.Deferred();
  let promise = deferred.promise();
  axios.get(url).then((data) => {
    deferred.resolve(data.data.response.result.main_data);
  }, (err) => {
    deferred.resolve(err);
  });
  return promise
};
/**
 * post请求
 */
phtservice.globalPostData =function (url,data) {
  //新建一个Deferred 对象
  let deferred = $.Deferred();
  //原来的deferred对象上返回另一个deferred对象；没有参数时，返回一个新的deferred对象，该对象的运行状态无法被改变；接受参数时，作用为在参数对象上部署deferred接口。
  let promise = deferred.promise();
  axios.post(url,data).then((data) => {
    //改变Deferred对象的执行状态
      deferred.resolve(data.data.response)
  }, (err) => {
    deferred.resolve(err);
  });
  return promise
};
/*
* 参数加签名
* */
phtservice.addSign = function (params) {
  let prvKey = `-----BEGIN PRIVATE KEY-----MIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCOIExUg6h3Y1sCfnSMe/GNW7RH1IVNisb36nBmOWSVOekFZ7gnRAZgtE4om/F6D+QdwL0j4Ls/NhozjsHi6/JGkPUWdUjafOvjv1dUcql1poxnhN/vEJsIa3WQjHXxVionxJjjO2fMj7wS6AXdbmSf62PtEq8JC4ZzUGuKhDqX2MwxhM6plFgcgAc1qtX3eRTvLi8+LR4xrqmHmDyMUe6ZFboNcPD+MGcIy5LCRkvrBAc5CwQ5N77NexGmHeoi8LImRRYALXFbzRt9odxdA0jajRreBJJZ8mA1tiaemyrnropQH9VWt/3tDif8EApIPNb6E06R+1mnNlE7FhUmuoxjAgMBAAECggEAaxd/LHeAK2WcIAb0/x4tZtxgvXcvcrxNLGVkiEJave7C3KXIpx2kyJ1T/1lx3Q24T4r5ed1OelTj7VF2Wux6xB1Z77A0Ux2qCRQWU7WKZvI1/ZKrwdF7YB7ImUCdZloMraZ/pUkP752mk4BtWuphu/Z8dxiK93/NsXo5bkgwdlVv3l6ArsxgtFwlJwAhCB4Rkm+FG55sLDPFiiw0+5gIQbETVx7/ylqpngjYMMEBgvfY95iOSmugU/+x4kMQq5xooTBQ2gk0V4fsh+qeUccIQ7T0/MmoUWs6c4H+oDr0148sniTa0vxzV0uuA7CuQ5trDERBsTs3U0ruIH74YrK6gQKBgQDHFOHDxT/vuku7eNpjH1Bdl03WCJHv0MCzlktNJKwhj+h3w1TQy3wk77Br7DpybFnqhy//wLv8JP+Ws4GHjZVhLlfvo/s2aAJgAXM26s7YEloOG+sfVt7fuZINTCDmkHaN2OunY9qTGqctRjaMeBijmwFGi8R2C3FqtxthzPRq4QKBgQC2wsDjEkvt3qYWvXCoN+SRZKo9TYR/Kf0uuAc2t9G97k5WntOF9FZdR519EfJ/gn5hKzzqBDR/B1R/IvvW/lbIvlDmz9pGelaJQzlYUL1kqw7/BY/Gda19hrQvNUseDw5os8mkR/2+VApSoAqwRfoiOV11uNJjQi03qN+1LVyDwwKBgAm2JhFDxQuvvdQGYDjnpSb7o4tmXaAiQdRA56l6uX7lo0R8Xd3Vn1e57ZRGMM+2I2jCcX/7afAx6dnzJcV0Da5w8U86Y53S0xLV30X1jGOT+Zqol/6uYS7uwYYuiYhV0cK3qz8+KsJ0UWVvAGg3z5PjkttbJBlSE5VOG2LY+a9hAoGAQ2nHGHsxQsaz4QNzwLkNOIw3N3GWhAmK+GatUoOvfC2g+9aOE4UzLikycGXkWyBZWaJHT9LJQmoDwvm2h3E9tcJtuRXGX+TUcsE3L9poYe+vEmaMyBm0Ku87G4a+9JF9MSXQJSbg9Amv3RZnmunVADbEwJ2yDSbl4vgJvJzE2V0CgYEAhlfJ7FrQQTRdq0g4/6a6EFotzUBGnBdS2K3Eh65ixHvw47L/zwoOwHNUd1el+2W4r18EgY5jIF0jvuiv6qTcTGO48izn1Q3cdtCfk5a8BSpu5jIsB9TPZ2pewkhyzcuGe7SfM3K9vxZMWtAud8pR0Jq2G7HUBM+uV+savJ7mxMI=-----END PRIVATE KEY-----`
  let sig = new KJUR.crypto.Signature({"alg": "SHA1withRSA","prov": "cryptojs/jsrsa"});
  sig.init(prvKey);
  sig.updateString(JSON.stringify(params));
  let signs = Jsrsasign.hex2b64(sig.sign())
  let sign = encodeURIComponent(signs ,"UTF-8")
  return sign
}
/**
 * 格式化数据
 */
phtservice.submitData =function (params) {
  let submitData ={};
  submitData.header ={
    "clientid": "",
 		"device": "pc",
 		"platform": "web",
 		"projectid": "project_platform",
 		"version": "1.0"
  }
    submitData.request={}
    submitData.request = {"params":params}
    submitData.saveOperTokenCode =''
    submitData.tokenCode =''
    submitData.sign = phtservice.addSign( submitData.request)
    return submitData
};

/**
 * 存储localStorage
 */
phtservice.setStore = (name, content) => {
  if (!name) return;
  if (typeof content !== 'string') {
    content = JSON.stringify(content);
  }
  window.localStorage.setItem(name, content);
};

/**
 * 获取localStorage
 */
phtservice.getStore = name => {
  if (!name) return;
  return window.localStorage.getItem(name);
};

/**
 * 删除localStorage
 */
phtservice.removeStore = name => {
  if (!name) return;
  window.localStorage.removeItem(name);
};

export {phtservice}
