const state = {
    status: 'READY',
    error: false,
    isLoading: true,
    id: 0,
    item: {},
    viewMode: 'DESKTOP',
    confirmDialog: false,
    confirmAction: 'REMOVE',
    isActing: false,
    hasErrorCode: 0,
}

export default {
    default: () => {
        return JSON.parse(JSON.stringify(state))
    },
}
