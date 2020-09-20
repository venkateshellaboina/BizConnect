import { businessConstants } from '../constant';

const initialState = {
   business_id:0,
   business_details:null
};

export function businessReducer(state = initialState, action) {
  switch (action.type) {
    case businessConstants.SET_BUSINESS_ID:
        return {
          ...state,
          business_id:action.data
        };
    case businessConstants.SET_BUSINESS_DETAILS:
        return{
            ...state,
            business_details:action.data
        };
   
    default:
      return state;
  }
}