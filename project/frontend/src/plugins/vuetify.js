// src/plugins/vuetify.js

import Vue from 'vue'
import Vuetify from 'vuetify'
import '@mdi/font/css/materialdesignicons.css'

import 'vuetify/dist/vuetify.min.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

Vue.use(Vuetify)

export default new Vuetify ({ 
    defaultAssets: {
        font: true,
        icons: 'mdi'
      },
    icons: { 
        iconfont: 'mdiSvg', 
    }, 
    
})
