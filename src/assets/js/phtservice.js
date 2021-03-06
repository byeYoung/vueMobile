//公共方法
import axios from 'axios'
let phtservice ={};
/**
 * git请求
 */
phtservice.globalGetData =function (url) {
  let deferred = $.Deferred();
  let promise = deferred.promise();
  axios.get(url).then((data) => {
    deferred.resolve(data);
  }, (err) => {
    deferred.resolve(err);
  });
  return promise
};
/**
 * post请求
 */
phtservice.globalPostData =function (url,data) {
  let deferred = $.Deferred();
  let promise = deferred.promise();
  axios.post(url,data).then((data) => {
    deferred.resolve(data);
  }, (err) => {
    deferred.resolve(err);
  });
  return promise
};
/**
 * 格式化数据
 */
phtservice.header =function (clientid,device,platform,projectid,version) {
  let header ={};
  header.clientid =clientid;
  header.device=device;
  header.platform =platform;
  header.projectid =projectid;
  header.version =version;
  return header
};
/**
 * 
 */
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
