import Vue from 'vue'
import App from './App.vue'
import SlideUpDown from 'vue-slide-up-down' //토글 슬라이드 다운 

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

Vue.component('slide-up-down', SlideUpDown)

new Vue({
  render: h => h(App),
}).$mount('#app')
