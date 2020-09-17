import { combineReducers } from 'redux';
import { userReducer } from './user.reducer';
import { customerReducer } from './customer.reducer';

const rootReducer = combineReducers({
  userReducer,
  customerReducer
});

export default rootReducer;