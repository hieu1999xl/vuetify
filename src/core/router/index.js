import Vue from 'vue'
import VueRouter from 'vue-router'

import Index from '../../pages/Index/Index'
import SystemError from '../../pages/Error/SystemError'
import AccessDenied from '../../pages/Error/AccessDenied'
import PageNotFound from '../../pages/Error/PageNotFound'

import Sample from '../../pages/Sample/Sample'
import SampleIndex from '../../pages/Sample/Index/SampleIndex'
import SampleReview from '../../pages/Sample/Review/SampleReview'
import SampleForm from '../../pages/Sample/Form/SampleForm'

import LoginForm from '../../pages/Login/LoginForm'

import Welcome from '../../pages/Welcome/Welcome'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Index',
        component: Index,
    },
    {
        path: '/sample-function-1',
        component: Sample,
        children: [
            {
                path: '',
                name: 'SampleIndex',
                component: SampleIndex,
            },
            {
                path: 'add',
                name: 'SampleForm',
                component: SampleForm,
            },
            {
                path: ':id',
                name: 'SampleReview',
                component: SampleReview,
            },
            {
                path: ':id/edit',
                name: 'SampleForm',
                component: SampleForm,
            },
        ],
    },
    {
        path: '/login',
        name: 'LoginForm',
        component: LoginForm,
    },
    {
        path: '/welcome',
        name: 'Welcome',
        component: Welcome,
    },
    {
        path: '/system-error',
        name: 'SystemError',
        component: SystemError,
    },
    {
        path: '/access-denied',
        name: 'AccessDenied',
        component: AccessDenied,
    },
    {
        path: '/*',
        name: 'ErrorPage',
        component: PageNotFound,
    },
]

const router = new VueRouter({
    mode: 'history',
    routes,
})

export default router
