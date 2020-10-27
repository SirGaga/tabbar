import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import axios from 'axios'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

const config = {
  url:'http://123.207.32.32:8000/home/multidata',
}

axios(config).then(res => {
  console.log(res);
});

const configParam = {
  url: 'http://123.207.32.32:8000/home/data',
  params: {
    type: 'pop',
    page: 1
  }
}

axios(configParam).then(res => {
  console.log(res);
})