import { customerConstants } from '../constant';

const initialState = {
    businessList : null,
    businessCategory: '',
    businessCategoriesList : [],
    searchKey: ''
};

export function customerReducer(state = initialState, action) {
  switch (action.type) {
    case customerConstants.GET_BUSINESS_LIST:
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
    case customerConstants.SEARCH_KEY_CHANGE:
        return{
            ...state,
            searchKey : action.searchKey
        }
    default:
      return state;
  }
}