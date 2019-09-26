// import Vue from 'vue';
import axios from 'axios';
import config from '../config';

const { baseURL } = config;
axios.defaults.baseURL = baseURL;
axios.defaults.timeout = 10000;

// axios.interceptors.request.use(
//   config => {
//     return config;
//   },
//   err => {
//     return { errorCode: 666, errorMsg: '请求失败' };
//   }
// );

axios.interceptors.response.use(
  res => {
    return res.data;
  },
  // err => {}
);

const $axios = {
  async postRequest(url, params) {
    let instance = axios({
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      url,
      data: params
    });
    return instance;
  },
  async getRequest(url) {
    let instance = axios({
      method: 'get',
      url
    });
    return instance;
  }
};

export default $axios;
