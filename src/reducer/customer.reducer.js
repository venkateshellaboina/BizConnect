import { customerConstants } from '../constant';

const initialState = {
    businessList : null,
    businessCategory: '',
    businessCategoriesList : []
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
    case customerConstants.CHANGE_BUSINESS_CATEGORY:
        return{
            ...state,
            businessCategory : action.businessCategory
        };
    case customerConstants.GET_BUSINESS_CATEGORIES:
        return{
            ...state,
            businessCategoriesList : action.businessCategoriesList
        }
    default:
      return state;
  }
}