
import Vue from 'vue'
import App from './App'
import store from './store'

import('./assets/base.css')
import('./assets/index.css')

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  store
})
