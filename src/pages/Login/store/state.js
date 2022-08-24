const state = {
    status: 'READY',
    error: false,
    isLoading: false,
    data: {},
    item: {},
    defaultData: {},
}

export default {
    default: () => {
        return JSON.parse(JSON.stringify(state))
    },
}
