import { Dispatch } from "redux";
import { businessConstants, customerConstants } from "../constant";
import BusinessService from "../services/business.service";
const service = new BusinessService();

export function addBusiness(business) {
  return function (dispatch) {
    return service
      .addBusiness(business)
      .then((response) => {
        console.log(response)
        dispatch({
          type: customerConstants.ON_BUSINESS_SELECT,
          selectedBusinessId: response.data.addBusinessDetails
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

export function getBusiness(id) {
  return function (dispatch) {
    return service
      .getBuisnessDetails(Number(id))
      .then((response) => {
        // dispatch
        dispatch({
          type: businessConstants.SET_BUSINESS_DETAILS,
          data: response.data.getBusinessDetails,
        });
      })
      .catch((e) => {
        console.log(e);
      });
  };
}
