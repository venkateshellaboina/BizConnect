import { offerConstants } from '../constant';

const initialState = {
    offersList : []
};

export function offerReducer(state = initialState, action) {
  switch (action.type) {
    case offerConstants.GET_OFFER_LIST:
        console.log('data ' + action.data)
        return {
          offersList : action.data
        };
    default:
      return state;
  }
}