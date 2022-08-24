import Vue from 'vue'
import Vuex from 'vuex'

import AppState from './app'

import SampleIndex from '../../pages/Sample/Index/store'
import SampleReview from '../../pages/Sample/Review/store'
import SampleForm from '../../pages/Sample/Form/store'
import Login from '../../pages/Login/store'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {},
    mutations: {},
    actions: {},
    getters: {},
    modules: {
        AppState,
        SampleIndex,
        SampleReview,
        SampleForm,
        Login,
    },
})

export default store
