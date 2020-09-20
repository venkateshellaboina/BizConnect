import { serviceConstants} from '../constant';
import ServiceService from  '../services/service.service';
const service = new ServiceService();

export function getServices(businessId) {
console.log("Business id: "+businessId)
    return function(dispatch) {
      return  service.getServices(businessId).then(servicesList => {
          // dispatch
          dispatch({
              type: serviceConstants.GET_SERVICE_LIST,
              data: servicesList
          });
      });
  };
    
}