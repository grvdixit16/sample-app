import {combineReducers} from 'redux';
import authReducer from './auth.reducer';
import userReducer from './user.reducer';

const reducer = combineReducers({
    authReducer,
    userReducer
});

export default reducer;