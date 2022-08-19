const status = state => {
    return state.status
}

const error = state => {
    return state.error
}

const list = state => {
    return state.list
}

const search = state => {
    return state.search
}

const pagination = state => {
    return state.pagination
}

const isLoading = state => {
    return state.isLoading
}

const confirmDialog = state => {
    return state.confirmDialog
}

const confirmAction = state => {
    return state.confirmAction
}

const targetId = state => {
    return state.targetId
}

const isActing = state => {
    return state.isActing
}

const hasErrorCode = state => {
    return state.hasErrorCode
}

export default {
    status,
    error,
    list,
    search,
    pagination,
    isLoading,
    confirmDialog,
    confirmAction,
    targetId,
    isActing,
    hasErrorCode,
}
