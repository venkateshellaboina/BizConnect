import { Dispatch } from "redux";
import { customerConstants } from "../constant";
import BusinessService from "../services/business.service";
const service = new BusinessService();

export function addBusiness(business) {
  return function (dispatch) {
    return service
      .addBusiness(business)
      .then((response) => {
        // dispatch
        dispatch({
          type: customerConstants.ON_BUSINESS_SELECT,
          data: response.data.addBusiness,
        });
      })
      .catch((e) => {
        console.log(e);
      });
  };
}

export function updateBusiness(business) {
  return function (dispatch) {
    return service
      .updateBusiness(business)
      .then((response) => {
        // dispatch
        dispatch({
          type: customerConstants.ON_BUSINESS_SELECT,
          data: response.data.updateBusiness,
        });
      })
      .catch((e) => {
        console.log(e);
      });
  };
}
