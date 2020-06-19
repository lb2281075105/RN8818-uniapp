import Vue from 'vue'
import App from './App'

import { request } from './common/api.js'

Vue.prototype.$myRequest = request

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
