const status = state => {
    return state.status
}

const error = state => {
    return state.error
}

const isLoading = state => {
    return state.isLoading
}

const item = state => {
    return state.item
}

const id = state => {
    return state.id
}

const viewMode = state => {
    return state.viewMode
}

const confirmDialog = state => {
    return state.confirmDialog
}

const confirmAction = state => {
    return state.confirmAction
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
    isLoading,
    id,
    item,
    viewMode,
    confirmDialog,
    confirmAction,
    isActing,
    hasErrorCode,
}
