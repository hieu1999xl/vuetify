import axios from 'axios'
import URL from '../../../../core/url'
import * as MUTATIONS_TYPE from './types'
import { UPLOAD_IMAGE_ERROR, UPLOAD_IMAGE_START, UPLOAD_IMAGE_SUCCESS } from './types'

/**
 * Destroy state
 * @param commit
 */
const destroy = ({ commit }) => {
    commit(MUTATIONS_TYPE.DESTROY)
}

/**
 * Initialize
 * @param commit
 */
const initialize = ({ commit }, id) => {
    if (id) {
        axios
            .get(URL.SampleAdminApi(`/entity/${id}`))
            .then(response => {
                if (!response.headers.code) {
                    commit(MUTATIONS_TYPE.INITIALIZE, response.data)
                } else {
                    console.error(response.data)
                    commit(MUTATIONS_TYPE.SHOW_ERROR_MSG, new Error(response.data.message))
                }
            })
            .catch(error => {
                console.error(error)
                commit(MUTATIONS_TYPE.SHOW_ERROR_MSG, error)
            })
    } else {
        commit(MUTATIONS_TYPE.INITIALIZE)
    }
}

/**
 * Show error massage
 * @param commit
 * @param error
 */
const showErrorMsg = ({ commit }, error) => {
    commit(MUTATIONS_TYPE.SHOW_ERROR_MSG, error)
}

/**
 * Change view mode
 * @param commit
 * @param error
 */
const changeViewMode = ({ commit }, viewMode) => {
    commit(MUTATIONS_TYPE.CHANGE_VIEW_MODE, viewMode)
}

/**
 * Show confirm dialog
 * @param commit
 * @param action
 */
const showConfirmDialog = ({ commit }, action) => {
    commit(MUTATIONS_TYPE.SHOW_CONFIRM_DIALOG, action)
}

/**
 * Hide confirm dialog
 * @param commit
 */
const hideConfirmDialog = ({ commit }) => {
    commit(MUTATIONS_TYPE.HIDE_CONFIRM_DIALOG)
}

/**
 * Show error dialog
 * @param commit
 * @param action
 */
const showErrorDialog = ({ commit }, type) => {
    commit(MUTATIONS_TYPE.SHOW_ERROR_DIALOG, type)
}

/**
 * Hide error dialog
 * @param commit
 */
const hideErrorDialog = ({ commit }) => {
    commit(MUTATIONS_TYPE.HIDE_ERROR_DIALOG)
}

/**
 * Upload image to cdn
 * @param commit
 * @param state
 * @param params
 */
const uploadImage = ({ commit, state }, params) => {
    commit(UPLOAD_IMAGE_START)
    const formData = new FormData()
    formData.set('file', params.file)

    const headers = { 'Content-Type': 'multipart/form-data', 'cdn-owner-id': state.data.cdnOwnerId }

    return axios
        .post(URL.CdnApi('upload/public/post'), formData, { headers })
        .then(res => {
            if (!res.headers.code) {
                commit(UPLOAD_IMAGE_SUCCESS, { sectionIdx: params.index, data: res.data })
            } else {
                commit(UPLOAD_IMAGE_ERROR)
                console.error(new Error(res.headers.code))
            }
        })
        .catch(error => {
            commit(UPLOAD_IMAGE_ERROR)
            console.error(error)
        })
}

export default {
    destroy,
    initialize,
    showErrorMsg,

    changeViewMode,

    showConfirmDialog,
    hideConfirmDialog,
    showErrorDialog,
    hideErrorDialog,

    uploadImage,
}
