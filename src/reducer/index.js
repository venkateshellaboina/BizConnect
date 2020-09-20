import { combineReducers } from 'redux';
import { userReducer } from './user.reducer';
import { customerReducer } from './customer.reducer';
import { menuReducer } from './menu.reducer';
import { reviewReducer } from './review.reducer';
import { offerReducer } from './offer.reducer';
import { vacancyReducer } from './vacancy.reducer';
import { serviceReducer } from './service.reducer';
import {businessReducer} from './business.reducer';

const rootReducer = combineReducers({
  userReducer,
  customerReducer,
  menuReducer,
  reviewReducer,
  offerReducer,
  vacancyReducer,
  serviceReducer,
  businessReducer

});

export default rootReducer;