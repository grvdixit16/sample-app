import authService from '../services/auth.service';

export const USER_LOGIN = 'USER_LOGIN';
export const USER_LOGOUT = 'USER_LOGOUT';
export const USER_LOGIN_ERROR = 'USER_LOGIN_ERROR';

export const userLogin = (username, password) => async (dispatch) => {
    try {
        const res = await authService.authentication(username, password);
        dispatch({
            type: USER_LOGIN,
            payload: res
        });
    }
    catch (err) {
        dispatch({
            type: USER_LOGIN_ERROR,
            payload: err
        });
    }
};