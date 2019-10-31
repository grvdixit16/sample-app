import authService from '../services/auth.service';

export const USER_LOGIN = 'USER_LOGIN';
export const USER_LOGOUT = 'USER_LOGOUT';
export const USER_LOGIN_ERROR = 'USER_LOGIN_ERROR';

export const SPINNER_START = 'SPINNER_START';
export const SPINNER_STOP = 'SPINNER_STOP';

export const userLogin = (username, password) => async (dispatch) => {
    try {
        dispatch({
            type: SPINNER_START,
        });
        const res = await authService.authentication(username, password);
        dispatch({
            type: USER_LOGIN,
            payload: res
        });
        dispatch({
            type: SPINNER_STOP,
        });
    }
    catch (err) {
        dispatch({
            type: USER_LOGIN_ERROR,
            payload: err
        });
    }
};

export const userLogout = () => async (dispatch) => {
    try {
        await authService.logout();
        dispatch({
            type: USER_LOGOUT,
        });
    }
    catch (err) {
        dispatch({
            type: USER_LOGIN_ERROR,
            payload: err
        });
    }
};