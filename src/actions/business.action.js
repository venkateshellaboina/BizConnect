import { Dispatch } from "redux";
import { customerConstants } from "../constant";
import BusinessService from "../services/business.service";
const service = new BusinessService();

export function addBusiness(business) {
  try {
    return function (dispatch) {
      return service.addBusiness(business).then((id) => {
        // dispatch
        dispatch({
          type: customerConstants.ON_BUSINESS_SELECT,
          data: id,
        });
      });
    };
  } catch (e) {
    console.log(e);
  }
}

export function updateBusiness(business) {
  try {
    return function (dispatch) {
      return service.updateBusiness(business).then((id) => {
        // dispatch
        dispatch({
          type: customerConstants.ON_BUSINESS_SELECT,
          data: id,
        });
      });
    };
  } catch (e) {
    console.log(e);
  }
}
