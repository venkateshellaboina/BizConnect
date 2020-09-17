import { customerConstants } from '../constant';

const initialState = {
 businessList : null
};

export function customerReducer(state = initialState, action) {
  switch (action.type) {
    case customerConstants.GET_BUSINESS_LIST:
        // let businessList = [...state.businessList];
        // businessList.push(action.data);
        console.log('data ' + action.data)
        return {
          ...state,
          businessList : action.data
        };
    default:
      return state;
  }
}