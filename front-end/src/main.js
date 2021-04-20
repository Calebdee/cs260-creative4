import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

Vue.config.productionTip = false

import mock from './mock-data.js'

let data = {
  pokemon: mock,
  cart: [],
  user: null
}

new Vue({
  router,
  data,
  render: h => h(App)
}).$mount('#app')
