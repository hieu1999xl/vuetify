import * as MUTATIONS_TYPE from './types'
import { default as defaultState } from './state'

/**
 * Initialize
 * @param state
 */
const initialize = (state, data) => {
    state.id = data.id
    state.item = data
    state.status = 'WORKING'
    state.isLoading = false
}

/**
 * Destroy state
 * @param state
 */
const destroy = state => {
    Object.keys(defaultState).forEach(k => {
        state[k] = defaultState[k]
    })
}

/**
 * Show error massage
 * @param state
 * @param error
 */
const showErrorMsg = (state, error) => {
    state.status = 'ERROR'
    state.error = error
}

/**
 * Reload data start
 * @param state
 */
const reloadDataStart = state => {
    state.isLoading = true
}

/**
 * Reload data success
 * @param state
 * @param data
 */
const reloadDataSuccess = (state, data) => {
    state.item = data
    state.isLoading = false
}

/**
 * Reload data error
 * @param state
 */
const reloadDataError = state => {
    state.isLoading = false
}

/**
 * Change view mode
 * @param state
 * @param viewMode
 */
const changeViewMode = (state, viewMode) => {
    state.viewMode = viewMode
}

/**
 * Show confirm dialog
 * @param state
 * @param action
 */
const showConfirmDialog = (state, action) => {
    state.confirmDialog = true
    state.confirmAction = action
}

/**
 * Hide confirm dialog
 * @param state
 */
const hideConfirmDialog = state => {
    state.confirmDialog = false
    state.confirmAction = 'REMOVE'
    state.isActing = false
    state.hasErrorCode = 0
}

/**
 * Action start
 * @param state
 */
const actionStart = state => {
    state.isActing = true
    state.hasErrorCode = 0
}

/**
 * Action success
 * @param state
 */
const actionSuccess = state => {
    state.confirmDialog = false
    state.isActing = false
    state.hasErrorCode = 0
}

/**
 * Action error
 * @param state
 * @param code
 */
const actionError = (state, code) => {
    state.isActing = false
    state.hasErrorCode = code
}

export default {
    [MUTATIONS_TYPE.DESTROY]: destroy,
    [MUTATIONS_TYPE.INITIALIZE]: initialize,
    [MUTATIONS_TYPE.SHOW_ERROR_MSG]: showErrorMsg,

    [MUTATIONS_TYPE.RELOAD_DATA_START]: reloadDataStart,
    [MUTATIONS_TYPE.RELOAD_DATA_SUCCESS]: reloadDataSuccess,
    [MUTATIONS_TYPE.RELOAD_DATA_ERROR]: reloadDataError,

    [MUTATIONS_TYPE.CHANGE_VIEW_MODE]: changeViewMode,

    [MUTATIONS_TYPE.SHOW_CONFIRM_DIALOG]: showConfirmDialog,
    [MUTATIONS_TYPE.HIDE_CONFIRM_DIALOG]: hideConfirmDialog,

    [MUTATIONS_TYPE.ACTION_START]: actionStart,
    [MUTATIONS_TYPE.ACTION_SUCCESS]: actionSuccess,
    [MUTATIONS_TYPE.ACTION_ERROR]: actionError,
}
