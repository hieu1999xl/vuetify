import mutations from './mutations'
import actions from './actions'
import getters from './getters'

export default {
    namespaced: true,
    state: {
        status: 'READY',
        error: undefined,
        auth: undefined,
        user: undefined,
        authorization: undefined,
        config: {
            sso: 'https://sso.cvgbuilding.net',
            admin: 'https://admin.cvgbuilding.net',
            homepage: 'https://cvgbuilding.net',
            sampleAdminApi: 'http://localhost:3000',
            cdnApi: 'https://admin.cvgbuilding.net/cdn-api',
            domain: 'https://admin.cvgbuilding.net',
            context: '/',
        },
        sidebar: {
            enabled: true,
            permanent: true,
            miniVariant: false,
            show: true,
        },
        snackbar: {
            text: undefined,
            show: false,
        },
    },
    mutations: mutations,
    actions: actions,
    getters: getters,
}
