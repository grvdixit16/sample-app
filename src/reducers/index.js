import { combineReducers } from 'redux';
import authReducer from './auth.reducer';
import userReducer from './user.reducer';
import spinnerReducer from './spinner.reducer';

const reducer = combineReducers({
    authReducer,
    userReducer,
    spinnerReducer,
});

export default reducer;