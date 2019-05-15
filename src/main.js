import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
require('./assets/style.css')

Vue.use(require('vue-chartist'))
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
