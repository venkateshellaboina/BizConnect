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

export function filterBusinessList(filtername, value, businessList){
    let filteredBusinessList = businessList;
    if(filtername == "now-open"){
        if(value){
            filteredBusinessList = businessList.filter(business => business.isOpen == true);
        }
        else{
            filteredBusinessList = businessList.filter(business => business.isOpen == false);
        }
    }

    return function(dispatch){
        return dispatch({
                type: customerConstants.GET_BUSINESS_LIST,
                data: filteredBusinessList
            });
        
    }

}