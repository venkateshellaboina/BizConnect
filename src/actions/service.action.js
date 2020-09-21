import { serviceConstants} from '../constant';
import ServiceService from  '../services/service.service';
const service = new ServiceService();

export function getServices(businessId) {
// console.log("Business id: "+businessId)
let business_id = parseInt(businessId);

    return function(dispatch) {
      return  service.getServices(business_id).then(servicesList => {
          // dispatch
          dispatch({
              type: serviceConstants.GET_SERVICE_LIST,
              data: servicesList
          });
      });
  };
    
}