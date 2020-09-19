import { customerConstants } from '../constant';

const initialState = {
    businessList : null,
    filteredBusinessList : null,
    businessCategory: '',
    businessCategoriesList : [],
    searchKey: '',
    selectedBusinessId : null
};

export function customerReducer(state = initialState, action) {
  switch (action.type) {
    case customerConstants.GET_BUSINESS_LIST:
        return {
          ...state,
          businessList : action.data,
          filteredBusinessList : action.data
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
    case customerConstants.SET_FILTERED_BUSINESS_LIST:
        return{
            ...state,
            filteredBusinessList : action.data
        }
    case customerConstants.ON_BUSINESS_SELECT:
        return{
            ...state,
            selectedBusinessId: action.selectedBusinessId
        }
    default:
      return state;
  }
}