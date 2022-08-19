import axios from 'axios'
import URL from '../../../../core/url'
import * as MUTATIONS_TYPE from './types'

/**
 * Initialize
 * @param commit
 */
const initialize = ({ commit }) => {
    axios
        .get(URL.SampleAdminApi('/entity'))
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
}

/**
 * Destroy state
 * @param commit
 */
const destroy = ({ commit }) => {
    commit(MUTATIONS_TYPE.DESTROY)
}

/**
 * Reload data
 * @param commit
 * @param state
 */
const reloadData = ({ commit, state }) => {
    commit(MUTATIONS_TYPE.RELOAD_DATA_START)

    const params = {
        pageNo: state.pagination.pageNo,
        pageSize: state.pagination.pageSize,
    }

    if (state.search.keyword) {
        params.keyword = state.search.keyword
    }
    if (state.search.category) {
        params.category = state.search.category
    }

    axios
        .get(URL.SampleAdminApi('/entity'), { params })
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
 * Change page no
 * @param commit
 * @param pageNo
 */
const changePageNo = ({ commit, dispatch }, pageNo) => {
    commit(MUTATIONS_TYPE.CHANGE_PAGE_NO, pageNo)
    setTimeout(() => {
        dispatch('reloadData')
    }, 10)
}

/**
 * Change search condition
 * @param commit
 * @param dispatch
 * @param data
 */
const changeSearch = ({ commit, dispatch }, data) => {
    commit(MUTATIONS_TYPE.CHANGE_SEARCH, data)
    setTimeout(() => {
        dispatch('reloadData')
    }, 10)
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
 * Show confirm dialog
 * @param commit
 * @param params
 */
const showConfirmDialog = ({ commit }, params) => {
    commit(MUTATIONS_TYPE.SHOW_CONFIRM_DIALOG, params)
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
 * @param dispatch
 * @param id
 */
const hidePost = ({ commit, dispatch }, id) => {
    commit(MUTATIONS_TYPE.ACTION_START)
    axios
        .post(URL.SampleAdminApi(`/entity/${id}/hide`))
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
 * @param dispatch
 * @param id
 */
const showPost = ({ commit, dispatch }, id) => {
    commit(MUTATIONS_TYPE.ACTION_START)
    axios
        .post(URL.SampleAdminApi(`/entity/${id}/show`))
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
 * @param dispatch
 * @param id
 */
const removePost = ({ commit, dispatch }, id) => {
    commit(MUTATIONS_TYPE.ACTION_START)
    axios
        .delete(URL.SampleAdminApi(`/entity/${id}`))
        .then(response => {
            if (!response.headers.code) {
                dispatch('AppState/showSnackbar', 'Bài viết đã được xóa thành công!', { root: true })
                commit(MUTATIONS_TYPE.ACTION_SUCCESS, response.data)
                setTimeout(() => {
                    dispatch('reloadData')
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
    destroy,
    initialize,
    showErrorMsg,

    reloadData,

    changePageNo,
    changeSearch,

    showConfirmDialog,
    hideConfirmDialog,

    hidePost,
    showPost,
    removePost,
}
