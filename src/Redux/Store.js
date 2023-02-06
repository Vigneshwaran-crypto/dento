import {applyMiddleware, compose, createStore} from 'redux';
import thunk from 'redux-thunk';
import {LOG} from '../Common/Utils';

import rootReducer from './CombineReducers';
import {apiMiddleware, ApplicationMiddleware} from './Middleware';
import {StaticValues} from '../Common/Constants';
// import {LOG} from '../common/util';
// import {apiMiddleware, ApplicationMiddleware} from './Middleware';
initialState = {};

const MiddleWares = [apiMiddleware, ApplicationMiddleware, thunk];

const configureStore = () => {
  LOG('Initial STATE');
  if (__DEV__) {
    const createLogger = require('redux-logger').createLogger; // redux-logger 3.x
    const logger = createLogger({
      collapsed: true,
    });
    MiddleWares.push(logger);
  }
  return createStore(
    rootReducer,
    initialState,
    compose(applyMiddleware(...MiddleWares)),
  );
};
export default configureStore;
