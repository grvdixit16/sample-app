import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from '../reducers';

const intialState = {};
const middlewares = [
    thunk,
    logger,
]

const store = createStore(rootReducer, intialState, composeWithDevTools(applyMiddleware(...middlewares)));

export default store;