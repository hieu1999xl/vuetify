const status = state => {
    return state.status
}

const error = state => {
    return state.error
}

const auth = state => {
    return state.auth ? JSON.parse(JSON.stringify(state.auth)) : undefined
}

const user = state => {
    return state.user ? JSON.parse(JSON.stringify(state.user)) : undefined
}

const config = state => {
    return state.config ? JSON.parse(JSON.stringify(state.config)) : undefined
}

const sidebar = state => {
    return state.sidebar ? JSON.parse(JSON.stringify(state.sidebar)) : undefined
}

const snackbar = state => {
    return state.snackbar ? JSON.parse(JSON.stringify(state.snackbar)) : undefined
}

export default {
    status,
    error,
    auth,
    user,
    config,
    sidebar,
    snackbar,
}
