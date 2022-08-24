import * as MUTATIONS_TYPE from './types'

/**
 * Login state
 */

const login = ({ commit }, item) => {
    commit(MUTATIONS_TYPE.LOGIN, item)
}

export default {
    login,
}
