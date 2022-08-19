import axios from 'axios'
import * as MUTATIONS_TYPE from './types'

/**
 * Initialize
 * @param commit
 */
const initialize = ({ commit }) => {
    axios
        .get('/initialize')
        .then(response => {
            commit(MUTATIONS_TYPE.INITIALIZE, response.data)
        })
        .catch(error => {
            console.error(error)
            commit(MUTATIONS_TYPE.SHOW_ERROR_MSG, error)
        })
}

/**
 * Show error message
 * @param commit
 */
const showErrorMsg = ({ commit, error }) => {
    commit(MUTATIONS_TYPE.SHOW_ERROR_MSG, error)
}

/**
 * Show snackbar message
 * @param commit
 * @param message
 */
const showSnackbar = ({ commit }, message) => {
    commit(MUTATIONS_TYPE.SHOW_SNACKBAR, message)
}

/**
 * Hide snackbar message
 * @param commit
 */
const hideSnackbar = ({ commit }) => {
    commit(MUTATIONS_TYPE.HIDE_SNACKBAR)
}

/**
 * Show sidebar
 * @param commit
 * @param state
 */
const showSidebar = ({ commit, state }) => {
    const layout = {
        ...state.sidebar,
        show: true,
    }
    commit(MUTATIONS_TYPE.CHANGE_SIDEBAR, layout)
}

/**
 * Hide sidebar
 * @param commit
 * @param state
 */
const hideSidebar = ({ commit, state }) => {
    const layout = {
        ...state.sidebar,
        show: false,
    }
    commit(MUTATIONS_TYPE.CHANGE_SIDEBAR, layout)
}

/**
 * Enable sidebar
 * @param commit
 * @param state
 */
const enableSidebar = ({ commit, state }) => {
    const layout = {
        ...state.sidebar,
        enabled: true,
    }
    commit(MUTATIONS_TYPE.CHANGE_SIDEBAR, layout)
}

/**
 * Disable sidebar
 * @param commit
 * @param state
 */
const disableSidebar = ({ commit, state }) => {
    const layout = {
        ...state.sidebar,
        enabled: false,
    }
    commit(MUTATIONS_TYPE.CHANGE_SIDEBAR, layout)
}

/**
 * Permanent sidebar
 * @param commit
 * @param state
 */
const permanentSidebar = ({ commit, state }) => {
    const layout = {
        ...state.sidebar,
        permanent: true,
    }
    commit(MUTATIONS_TYPE.CHANGE_SIDEBAR, layout)
}

/**
 * Impermanent sidebar
 * @param commit
 * @param state
 */
const impermanentSidebar = ({ commit, state }) => {
    const layout = {
        ...state.sidebar,
        permanent: false,
    }
    commit(MUTATIONS_TYPE.CHANGE_SIDEBAR, layout)
}

/**
 * Collapse sidebar
 * @param commit
 * @param state
 */
const collapseSidebar = ({ commit, state }) => {
    const layout = {
        ...state.sidebar,
        miniVariant: true,
    }
    commit(MUTATIONS_TYPE.CHANGE_SIDEBAR, layout)
}

/**
 * Expand sidebar
 * @param commit
 * @param state
 */
const expandSidebar = ({ commit, state }) => {
    const layout = {
        ...state.sidebar,
        miniVariant: false,
    }
    commit(MUTATIONS_TYPE.CHANGE_SIDEBAR, layout)
}

export default {
    initialize,
    showErrorMsg,
    showSnackbar,
    hideSnackbar,
    showSidebar,
    hideSidebar,
    enableSidebar,
    disableSidebar,
    permanentSidebar,
    impermanentSidebar,
    collapseSidebar,
    expandSidebar,
}
