import axios from 'axios'
import URL from '../../../../core/url'
import * as MUTATIONS_TYPE from './types'
import router from '../../../../core/router'

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
        commit(MUTATIONS_TYPE.SHOW_ERROR_MSG, new Error('Đường dẫn sai! Không có id của bài viết.'))
    }
}

/**
 * Destroy state
 * @param commit
 */
const destroy = ({ commit }) => {
    commit(MUTATIONS_TYPE.DESTROY)
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
 * Reload data
 * @param commit
 * @param state
 */
const reloadData = ({ commit, state }) => {
    commit(MUTATIONS_TYPE.RELOAD_DATA_START)
    axios
        .get(URL.SampleAdminApi(`/entity/${state.id}`))
        .then(response => {
            if (!response.headers.code) {
                commit(MUTATIONS_TYPE.RELOAD_DATA_SUCCESS, response.data)
            } else {
                console.error(response.data)
                commit(MUTATIONS_TYPE.SHOW_ERROR_MSG, new Error(response.data.message))
            }
        })
        .catch(error => {
            console.error(error)
            commit(MUTATIONS_TYPE.RELOAD_DATA_ERROR)
            commit(MUTATIONS_TYPE.SHOW_ERROR_MSG, error)
        })
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
 * Hide a post
 * @param commit
 * @param state
 */
const hidePost = ({ commit, state, dispatch }) => {
    commit(MUTATIONS_TYPE.ACTION_START)
    axios
        .post(URL.SampleAdminApi(`/entity/${state.id}/hide`))
        .then(response => {
            if (!response.headers.code) {
                dispatch('AppState/showSnackbar', 'Bài viết đã được ẩn thành công!', { root: true })
                commit(MUTATIONS_TYPE.ACTION_SUCCESS, response.data)
                setTimeout(() => {
                    dispatch('reloadData')
                }, 10)
            } else {
                console.error(response.data)
                commit(MUTATIONS_TYPE.ACTION_ERROR, response.headers.code)
            }
        })
        .catch(error => {
            console.error(error)
            commit(MUTATIONS_TYPE.ACTION_ERROR, 500)
        })
}

/**
 * Show a post
 * @param commit
 * @param state
 */
const showPost = ({ commit, state, dispatch }) => {
    commit(MUTATIONS_TYPE.ACTION_START)
    axios
        .post(URL.SampleAdminApi(`/entity/${state.id}/show`))
        .then(response => {
            if (!response.headers.code) {
                dispatch('AppState/showSnackbar', 'Bài viết đã được hiện thành công!', { root: true })
                commit(MUTATIONS_TYPE.ACTION_SUCCESS, response.data)
                setTimeout(() => {
                    dispatch('reloadData')
                }, 10)
            } else {
                console.error(response.data)
                commit(MUTATIONS_TYPE.ACTION_ERROR, response.headers.code)
            }
        })
        .catch(error => {
            console.error(error)
            commit(MUTATIONS_TYPE.ACTION_ERROR, 500)
        })
}

/**
 * Remove a post
 * @param commit
 * @param state
 */
const removePost = ({ commit, state, dispatch }) => {
    commit(MUTATIONS_TYPE.ACTION_START)
    axios
        .delete(URL.SampleAdminApi(`/entity/${state.id}`))
        .then(response => {
            if (!response.headers.code) {
                dispatch('AppState/showSnackbar', 'Bài viết đã được xóa thành công!', { root: true })

                commit(MUTATIONS_TYPE.ACTION_SUCCESS, response.data)
                setTimeout(() => {
                    router.push({ path: '/sample-function-1' })
                }, 10)
            } else {
                console.error(response.data)
                commit(MUTATIONS_TYPE.ACTION_ERROR, parseInt(response.headers.code, 10))
            }
        })
        .catch(error => {
            console.error(error)
            commit(MUTATIONS_TYPE.ACTION_ERROR, 500)
        })
}

export default {
    initialize,
    destroy,
    showErrorMsg,
    reloadData,
    changeViewMode,
    showConfirmDialog,
    hideConfirmDialog,
    hidePost,
    showPost,
    removePost,
}
