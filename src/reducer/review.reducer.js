import { reviewConstants } from '../constant';

const initialState = {
    reviewsList : []
};

export function reviewReducer(state = initialState, action) {
  switch (action.type) {
    case reviewConstants.GET_REVIEW_LIST:
        console.log('data ' + action.data)
        return {
          reviewsList : action.data
        };
    default:
      return state;
  }
}