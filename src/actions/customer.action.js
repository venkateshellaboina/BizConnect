import { Dispatch } from 'redux';
import { customerConstants} from '../constant';
import CustomerService from  '../services/customer.service';
const service = new CustomerService();

export function getBusinessList(category) {
   
    return function(dispatch) {
      return  service.getBusinessList(category).then(businessList => {
          // dispatch
          dispatch({
              type: customerConstants.GET_BUSINESS_LIST,
              data: businessList
          });
      });
  };
    
 
}