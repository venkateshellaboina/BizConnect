import { Dispatch } from 'redux';
import { customerConstants} from '../constant';
import CustomerService from  '../services/customer.service';
const service = new CustomerService();

export function getBusinessList(businessCategory, searchKey) {
   
    return function(dispatch) {
    console.log('searchKey ' + searchKey);
      return  service.getBusinessList(businessCategory, searchKey).then(businessList => {
          // dispatch
          dispatch({
              type: customerConstants.GET_BUSINESS_LIST,
              data: businessList
          });
      });
  };
}

export function changeBusinessCategory(businessCategory){
    return function(dispatch){
        return dispatch({
                type: customerConstants.CHANGE_BUSINESS_CATEGORY,
                businessCategory : businessCategory
            })
    }
}

export function getBusinessCategoriesList(){
    return function(dispatch){
        return  service.getBusinessCategoriesList().then(businessCategoriesList => {
            // dispatch
            dispatch({
                type: customerConstants.GET_BUSINESS_CATEGORIES,
                businessCategoriesList: businessCategoriesList
            });
        });
    }
}


export function onSearchKeyChange(searchKey){
    return function(dispatch){

       return dispatch({
                type: customerConstants.SEARCH_KEY_CHANGE,
                searchKey : searchKey
            })
    }
}