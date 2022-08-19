import { v4 as uuidv4 } from 'uuid'
import * as MUTATIONS_TYPE from './types'
import { default as defaultState } from './state'

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
 * Initialize
 * @param state
 */
const initialize = (state, data) => {
    state.item = data
    state.status = 'WORKING'

    if (data) {
        state.data = data
    } else {
        state.data = {
            ...state.defaultData,
            cdnOwnerId: uuidv4(),
        }
    }
}

/**
 * Show error massage
 * @param state
 * @param data
 */
const showErrorMsg = (state, error) => {
    state.status = 'ERROR'
    state.error = error
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

const showErrorDialog = state => {
    state.errorDialog = true
}

const hideErrorDialog = state => {
    state.errorDialog = false
}

const uploadImageStart = state => {
    state.isUploading = true
}

const uploadImageSuccess = (state, data) => {
    state.isUploading = false
    state.addImages.push(data)
    state.deleteImages.push(state.data.sections[data.sectionIdx].image)
    state.data.sections[data.sectionIdx].image = data.data.url
}

const uploadImageError = state => {
    state.isUploading = false
    state.errorDialog = true
    state.errorType = 'UPLOAD_IMAGE'
}

export default {
    [MUTATIONS_TYPE.DESTROY]: destroy,
    [MUTATIONS_TYPE.INITIALIZE]: initialize,
    [MUTATIONS_TYPE.SHOW_ERROR_MSG]: showErrorMsg,

    [MUTATIONS_TYPE.CHANGE_VIEW_MODE]: changeViewMode,

    [MUTATIONS_TYPE.SHOW_CONFIRM_DIALOG]: showConfirmDialog,
    [MUTATIONS_TYPE.HIDE_CONFIRM_DIALOG]: hideConfirmDialog,

    [MUTATIONS_TYPE.SHOW_ERROR_DIALOG]: showErrorDialog,
    [MUTATIONS_TYPE.HIDE_ERROR_DIALOG]: hideErrorDialog,

    [MUTATIONS_TYPE.UPLOAD_IMAGE_START]: uploadImageStart,
    [MUTATIONS_TYPE.UPLOAD_IMAGE_SUCCESS]: uploadImageSuccess,
    [MUTATIONS_TYPE.UPLOAD_IMAGE_ERROR]: uploadImageError,
}
