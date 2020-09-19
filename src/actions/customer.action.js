import { Dispatch } from 'redux';
import { customerConstants} from '../constant';
import CustomerService from  '../services/customer.service';
const service = new CustomerService();

const Days = Object.freeze({
    0 : "Sunday",
    1 : "Monday",
    2: "Tuesday",
    3: "Wednesday",
    4: "Thursday",
    5: "Friday",
    6: "Saturday"
});

const setOpenStatus = (businessList) => {
    let now = Date.now();
    let date = new Date(now);
    let day = date.getDay(); //Ex: Wednesday
    let nowHours = date.getHours();
    let nowminutes = date.getMinutes();

    businessList.map(business => {
        business.isOpen = false;
        let timings = business.timings;
        if(timings && timings.length > 0){
            for(let i = 0;i < timings.length; i++){
                if(timings[i].day && timings[i].day.toLowerCase() == Days[day].toLowerCase()){
                    let start_time = timings[i].start_time;
                    let end_time = timings[i].end_time;
                    let break_start_time = timings[i].break_start_time;
                    let break_end_time = timings[i].break_end_time;
                    // let start_time_hours = start_time ? (start_time.split[':'])[0] : null;
                    business.isOpen = true;
                }
            }
        }
        return business;
    })
    return businessList;
}

export function getBusinessList(businessCategory, searchKey) {

    return function(dispatch) {
    console.log('searchKey ' + searchKey);
      return  service.getBusinessList(businessCategory, searchKey).then(businessList => {
            businessList = setOpenStatus(businessList);
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

    try{
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
    catch(e){
        console.log(e);
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

export function filterBusinessList(filters, businessList){
    let filteredBusinessList = businessList;
    if(filters['nowOpen']){
        filteredBusinessList = businessList.filter(business => business.isOpen == true);
    }
    if(filters['rating_4']){
        filteredBusinessList = businessList.filter(business => business.rating >= 4);
    }
    if(filters['rating_3']){
        filteredBusinessList = businessList.filter(business => business.rating >= 3);
    }
    if(filters['rating_2']){
        filteredBusinessList = businessList.filter(business => business.rating >= 2);
    }
    if(filters['rating_1']){
        filteredBusinessList = businessList.filter(business => business.rating >= 1);
    }
    return function(dispatch){
        return dispatch({
                type: customerConstants.SET_FILTERED_BUSINESS_LIST,
                data: filteredBusinessList
            });
    }

}

export function onBusinessSelect(business_id){
    return function(dispatch){
        return dispatch({
            type: customerConstants.ON_BUSINESS_SELECT,
            selectedBusinessId : business_id
        })
    }
}