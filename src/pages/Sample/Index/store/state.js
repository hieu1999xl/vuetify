const state = {
    status: 'READY',
    error: false,
    isLoading: true,
    list: [],
    search: {
        keyword: '',
        category: '',
    },
    pagination: {
        pageNo: 1,
        pageSize: 10,
        totalItems: 0,
        totalPages: 0,
    },
    confirmDialog: false,
    confirmAction: 'REMOVE',
    targetId: 0,
    isActing: false,
    hasErrorCode: 0,
}

export default {
    default: () => {
        return JSON.parse(JSON.stringify(state))
    },
}
