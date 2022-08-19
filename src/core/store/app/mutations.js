import * as MUTATIONS_TYPE from './types'

/**
 * Initialize
 * @param state
 */
const initialize = (state, data) => {
    state.status = 'WORKING'
    state.auth = data.auth
    state.user = data.user
    state.authorization = data.authorization
    state.config = { ...state.config, ...data.config }
}

/**
 * Show error message
 * @param state
 * @param data
 */
const showErrorMsg = (state, error) => {
    state.status = 'error'
    state.error = error
}

/**
 * Show snackbar message
 * @param commit
 * @param message
 */
const showSnackbar = (state, message) => {
    state.snackbar.text = message
    state.snackbar.show = true
}

/**
 * Hide snackbar message
 * @param state
 */
const hideSnackbar = state => {
    state.snackbar.text = undefined
    state.snackbar.show = false
}

/**
 * Change sidebar
 * @param state
 * @param layout
 */
const changeSidebar = (state, sidebar) => {
    state.sidebar = sidebar
}

export default {
    [MUTATIONS_TYPE.INITIALIZE]: initialize,
    [MUTATIONS_TYPE.SHOW_ERROR_MSG]: showErrorMsg,

    [MUTATIONS_TYPE.SHOW_SNACKBAR]: showSnackbar,
    [MUTATIONS_TYPE.HIDE_SNACKBAR]: hideSnackbar,

    [MUTATIONS_TYPE.CHANGE_SIDEBAR]: changeSidebar,
}
