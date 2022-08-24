import * as MUTATIONS_TYPE from './types'
import router from '@/core/router'

/**
 * Get Login Param
 */

const login = (state, data) => {
    state.item = data
    state.status = 'WORKING'

    if (data) {
        state.data = data
        console.log('data', data)
        router.push({ name: 'Index' })
    } else {
        console.log('error')
    }
}

export default {
    [MUTATIONS_TYPE.LOGIN]: login,
}
