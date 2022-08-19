import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'

import router from './core/router'
import store from './core/store'
import http from './core/http'
import vuetify from './core/plugins/vuetify'
import shares from './shares'

import PerfectScrollbar from 'vue2-perfect-scrollbar'
import VueCookies from 'vue-cookies'

import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'
import './styles/index.scss'

Vue.config.silent = true
Vue.config.devtools = true
Vue.config.performance = false
Vue.config.productionTip = false

Vue.config.errorHandler = function (err, vm, info) {
    console.error(err)
    console.error(vm)
    console.error(info)
}

Vue.config.warnHandler = function (msg, vm, trace) {
    console.warn(msg)
    console.warn(vm)
    console.warn(trace)
}

Vue.use(PerfectScrollbar)
Vue.use(VueCookies)

// set default config
Vue.$cookies.config('365d')

shares.components.forEach(item => {
    Vue.component(item.name, item)
})

Object.keys(shares.filters).forEach(key => {
    Vue.filter(key, shares.filters[key])
})

new Vue({
    router,
    store,
    http,
    vuetify,
    render: h => h(App),
}).$mount('#app')
