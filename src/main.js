import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './utils/request'
import './utils/vant'
import './utils/filter'
import './styles/base.css'
import './styles/iconfont.css'
import './utils/global'
import 'amfe-flexible'
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
