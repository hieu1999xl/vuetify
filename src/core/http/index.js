import Vue from 'vue'
import Axios from 'axios'
import store from '../store'

Vue.prototype.$http = Axios

// Enable local develop mode
const baseURL = `${window.location.protocol}//${window.location.host}`
if (baseURL.indexOf('localhost:') > -1) {
    Vue.prototype.$http.defaults.crossDomain = true
    Vue.prototype.$http.defaults.baseURL = `https://admin.cvgbuilding.net`
} else {
    Vue.prototype.$http.defaults.baseURL = baseURL
}

console.log(`Base URL: ${Vue.prototype.$http.defaults.baseURL}`)

// Add a request interceptor
Vue.prototype.$http.interceptors.request.use(
    config => {
        if (store.state.AppState.authorization && store.state.AppState.authorization.token) {
            config.headers.Authorization = `Bearer ${store.state.AppState.authorization.token}`
        }
        return config
    },
    error => {
        // Do something with request error
        return Promise.reject(error)
    }
)

// Add a response interceptor
Vue.prototype.$http.interceptors.response.use(
    response => {
        return response
    },
    error => {
        if (error.response && error.response.status === 401) {
            // window.location.href = store.state.AppState.config.admin + '/login'
            window.location.href = '/login'
        }
        if (error.response && error.response.status === 403) {
            // window.location.href = store.state.AppState.config.admin + '/access-denied'
            window.location.href = '/access-denied'
        }
        return Promise.reject(error)
    }
)

export default Axios
