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

const findIsOpenNow = (timing)=>{
    if(timing.start_time == null || timing.end_time == null) return false;

    let nowDateTime = new Date();

    let startDateTime = new Date(nowDateTime.getTime());
    startDateTime.setHours(timing.start_time.split(":")[0]);
    startDateTime.setMinutes(timing.start_time.split(":")[1]);
    // startDateTime.setSeconds(timing.start_time.split(":")[2]);

    let endDateTime = new Date(nowDateTime.getTime());
    endDateTime.setHours(timing.end_time.split(":")[0]);
    endDateTime.setMinutes(timing.end_time.split(":")[1]);
    // endDateTime.setSeconds(timing.end_time.split(":")[2]);

    let breakStartDateTime = null, breakEndDateTime = null;

    if(timing.break_start_time){
        breakStartDateTime = new Date(nowDateTime.getTime());
        breakStartDateTime.setHours(timing.break_start_time.split(":")[0]);
        breakStartDateTime.setMinutes(timing.break_start_time.split(":")[1]);
        // breakStartDateTime.setSeconds(timing.break_start_time.split(":")[2]);
    }

    if(timing.break_end_time){
        breakEndDateTime = new Date(nowDateTime.getTime());
        breakEndDateTime.setHours(timing.break_end_time.split(":")[0]);
        breakEndDateTime.setMinutes(timing.break_end_time.split(":")[1]);
        // breakEndDateTime.setSeconds(timing.break_end_time.split(":")[2]);
    }

    if(startDateTime <= nowDateTime && endDateTime > nowDateTime){
        if(breakStartDateTime && breakEndDateTime){
            if(breakStartDateTime <= nowDateTime && breakEndDateTime > nowDateTime){
                return 'break';
            }
            else{
                return 'open';
            }
        }
        else{
            return 'open';
        }
    }
    else{
        return 'closed';
    }

}

const setOpenStatus = (businessList) => {
    let now = Date.now();
    let date = new Date(now);
    let day = date.getDay(); //Ex: Wednesday

    businessList.map(business => {
        business.status = 'closed';
        let timings = business.timings;
        if(timings && timings.length > 0){
            for(let i = 0;i < timings.length; i++){
                if(timings[i].day && timings[i].day.toLowerCase() == Days[day].toLowerCase()){
                    let status = findIsOpenNow(timings[i]);
                    business.status = status;
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
        filteredBusinessList = businessList.filter(business => business.status == 'open');
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