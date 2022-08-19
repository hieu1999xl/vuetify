import store from '../store'

const SampleAdminApi = uri => {
    const host = store.state.AppState.config.sampleAdminApi
    const path = !uri.startsWith('/') ? uri : uri.substring(1)
    return `${host}/${path}`
}

const CdnApi = uri => {
    const host = store.state.AppState.config.cdnApi
    const path = !uri.startsWith('/') ? uri : uri.substring(1)
    return `${host}/${path}`
}

export default {
    SampleAdminApi,
    CdnApi,
}
