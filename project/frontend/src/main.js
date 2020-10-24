import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vuex from 'vuex'   //로그인 세션
import vuetify from '@/plugins/vuetify' // path to vuetify export

import axios from 'axios'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false
Vue.prototype.$http = axios;

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(Vuex)

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
