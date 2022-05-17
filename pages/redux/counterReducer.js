const initialState = {
    plusNumber: 0,
    sidebarShow: true,
    modal: false,
    apiKatin: 'http://127.0.0.1:10002/',
    DataAddKatin: {
        RobeAll: '',
        KatinDateAll: '',
        KatinYear: '',
    },
}

const counterReducer = (state = initialState, { type, ...rest }) => {
    switch (type) {
        case 'set':
            return { ...state, ...rest }
        default:
            return state
    }
}
export default counterReducer