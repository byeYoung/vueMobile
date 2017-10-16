import axios from 'axios'
axios.defaults.timeout = 20000;
axios.defaults.baseURL = '';
var baseURL = 'http://prep.tingjiandan.com/'
if (location.host.indexOf('prep') > -1 || location.host.indexOf('test') > -1) {
  baseURL = 'http://prep.tingjiandan.com/'
} else if (location.host.indexOf('open') > -1) {
  baseURL = 'http://open.tingjiandan.com/'
}
// http request 拦截器
axios.interceptors.request.use(
  config => {
    LoadingBar.start();
    config.url = baseURL + config.url
    if (config.url.indexOf("getUserInfoPromotion") > -1) {
      config.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
      config.data = qs.stringify(config.data)
    } else {
      config.headers.post['Content-Type'] = 'application/text';
    }
    return config;
  },
  err => {
    LoadingBar.error()
    return Promise.reject(err);
  });

// http response 拦截器
axios.interceptors.response.use(
  response => {
    if(!Number.isInteger(response.data.isSuccess)){
      response.data.isSuccess = 1 - ~~response.data.isSuccess
    }

    if (response.data.isSuccess == '-1') { //登录超时
      LoadingBar.finish();
      location.href = location.origin + "/#/login"
    } else if (response.data.isSuccess == '1' || response.data.isSuccess == '2') { //业务异常
      LoadingBar.finish();
      return response.data;
    } else {
      LoadingBar.finish();
      return response.data;
    }
  },
  error => {
    if (error.response) {
      showMessage.error(error.message);
      switch (error.response.status) {
        case 401:
      }
    } else {
      LoadingBar.error()
      showMessage.error(error.message);
      return Promise.reject(error)
    }
    showMessage.error(error.message);
    LoadingBar.error()
    return Promise.reject(error.response.data)
  }
);

export default axios;
