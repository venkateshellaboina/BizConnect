import { Dispatch } from "redux";
import { userConstants } from "../constant";
import UserService from "../services/user";
const service = new UserService();
/**
 * Dispatch login request to trigger origin modal to login
 */

export function login(user) {
  let user_email = user.user_email;
  return function (dispatch) {
    return service.getUser(user_email).then((response) => {
      // dispatch
      dispatch({
        type: userConstants.LOGIN_REQUEST,
        data: response.data.getUser
      });
    }).catch((e) => {
      console.log(e);
    });
  };
}

export function addUser(user) {
  return function (dispatch) {
    return service
      .addUser(user)
      .then((user) => {
        // dispatch
        dispatch({
          type: userConstants.USER_SIGNUP,
          data: user.data.addUser,
        });
      })
      .catch((e) => {
        console.log(e);
      });
  };
}
