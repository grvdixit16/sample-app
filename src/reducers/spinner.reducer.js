const intialState = {
    isLoading: false,
};

function spinnerReducer(state = intialState, action) {
    switch (action.type) {
        case 'SPINNER_START':
            return {
                ...state,
                isLoading: true,
            };
        case 'SPINNER_STOP':
            return {
                ...state,
                isLoading: false,
            };
        default:
            return state;
    }
}

export default spinnerReducer;