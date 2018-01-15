import axios from 'axios'
axios.defaults.timeout = 20000;
axios.defaults.baseURL = '';
var baseURL = '';
axios.interceptors.request.use(
  config => {
    config.url = baseURL + config.url;
    return config;
  },
  err => {


  });

export default axios;
