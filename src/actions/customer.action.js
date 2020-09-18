import { Dispatch } from 'redux';
import { customerConstants} from '../constant';
import CustomerService from  '../services/customer.service';
const service = new CustomerService();

const Days = Object.freeze({
    0 : "Sunday",
    1 : "Monday"
})

export function getBusinessList(businessCategory, searchKey) {
   
    return function(dispatch) {
    console.log('searchKey ' + searchKey);
      return  service.getBusinessList(businessCategory, searchKey).then(businessList => {
            // let now = Date.now();
            // let date = new Date(now);
            // let day = date.getDay(); //Ex: Wednesday
            // let nowHours = date.getHours();
            // let minutes = date.getMinutes();

            // businessList.map(business => {
            //     if(business.timings){

            //         for(let i = 0;i < timings.length; i++){
            //             if(timings[i].day.toLowerCase() == Days[day].toLowerCase()){
                            
            //             }
            //         }
            //     }
            // })
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