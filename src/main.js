import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "./assets/style/base.less"



import { Toast,Button  } from 'vant';
Vue.use(Toast)
    .use(Button)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
