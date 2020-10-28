import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import axios from 'axios'
import {request} from './network/request'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

// axios 全局配置
axios.defaults.baseURL = 'http://123.207.32.32:8000';
axios.defaults.timeout = 5000

// axios 基本使用
const config = {
  url:'/home/multidata',
}

// axios(config).then(res => {
//   console.log(res);
// });

const configParam = {
  url: '/home/data',
  params: {
    type: 'pop',
    page: 1
  }
}

// axios(configParam).then(res => {
//   console.log(res);
// })

// axios 发送并发请求
// axios.all([
//     axios(config),
//     axios(configParam)
// ]).then(res => {
//   console.log(res);
// });

// axios.all([
//   axios(config),
//   axios(configParam)
// ]).then(axios.spread((res1,res2)  => {
//   console.log(res1);
//   console.log(res2);
// }));

// axios 创建实例 用于不同服务器，不同超时等配置

// const instance1 = axios.create({
//   baseURL: 'http://123.207.32.32:8000',
//   timeout: 5000
// })
//
// instance1(config).then(res => console.log(res));
//
// instance1(configParam).then(res => console.log(res));

request(config)
    .then(res => console.log(res))
    .catch(error => console.log(error));
