const state = {
    status: 'READY',
    error: false,
    isLoading: false,
    viewMode: 'DESKTOP',

    item: {},
    data: {},

    addImages: [],
    deleteImages: [],

    confirmDialog: false,
    confirmAction: 'CANCEL',

    errorDialog: false,
    errorType: 'UPLOAD_IMAGE',

    isUploading: false,
    uploadingError: 0,

    defaultData: {
        title: '',
        category: 'GROUP-INTRO',
        status: 'PUBLISHED',
        urlSlug: '',
        metaTitle: '',
        metaKeyword: '',
        metaDescription: '',
        sections: [
            {
                id: 1,
                type: 'TITLE',
                title: 'Tiêu đề bài viết',
            },
            {
                id: 2,
                type: 'SUBTITLE',
                subtitle: 'Nội dung ví dụ',
            },
            {
                id: 3,
                type: 'TEXT',
                text: 'Đoạn văn ví dụ',
            },
            {
                id: 4,
                type: 'IMAGE',
                image: '',
            },
        ],
    },
}

export default {
    default: () => {
        return JSON.parse(JSON.stringify(state))
    },
}
