import {  applyMiddleware,createStore } from 'redux';
import rootReducer from '../reducer/index';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
const loggerMiddleware = createLogger();

export default function configureStore(preloadedState) {
    return createStore(
      rootReducer,
      preloadedState,
      applyMiddleware(thunkMiddleware, loggerMiddleware)
    )
  }
