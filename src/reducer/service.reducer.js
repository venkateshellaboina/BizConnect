import { serviceConstants } from '../constant';

const initialState = {
    servicesList : []
};

export function serviceReducer(state = initialState, action) {
  switch (action.type) {
    case serviceConstants.GET_SERVICE_LIST:
        console.log('data ' + action.data)
        return {
          servicesList : action.data
        };
    default:
      return state;
  }
}