const status = state => {
    return state.status
}

const error = state => {
    return state.error
}

const item = state => {
    return state.item
}

const data = state => {
    return state.data
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

const errorDialog = state => {
    return state.errorDialog
}

const errorType = state => {
    return state.errorType
}

const isUploading = state => {
    return state.isUploading
}

const uploadingError = state => {
    return state.uploadingError
}

export default {
    status,
    error,
    item,
    data,
    viewMode,
    confirmDialog,
    confirmAction,
    errorDialog,
    errorType,
    isUploading,
    uploadingError,
}
