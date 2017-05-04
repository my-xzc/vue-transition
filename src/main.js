// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import lodash from 'lodash'
import Data from './server/data'
import api from './server/apiConfig'
import authorize from './platform/authorize'

authorize()

Vue.config.productionTip = false
Vue.prototype.$ajax = Data;
Vue.prototype.$api = api;
Vue.prototype.$lodash = lodash;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
