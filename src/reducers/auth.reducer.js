const intialState = {
    isLoggedIn: false,
    user: {},
    errors: {},
};

function authReducer(state=intialState, action){
    switch(action.type){
        case 'USER_LOGIN':
            return {
                ...state,
                isLoggedIn: true,
                user: action.payload
            };
        case 'USER_LOGOUT':
            return {
                ...state,
                isLoggedIn: false,
                user: {}
            };
        case 'USER_LOGIN_ERROR':
            return {
                ...state,
                errors: action.payload
            };
        default:
            return state;
    }
}

export default authReducer;