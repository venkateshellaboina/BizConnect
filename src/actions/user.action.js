import { Dispatch } from 'redux';
import { userConstants} from '../constant';
import UserService from  '../services/user';
const service = new UserService();
/**
 * Dispatch login request to trigger origin modal to login
 */


  export function login(user) {
    let user_email = user.user_email;
    let password = user.password;
    return function(dispatch) {
      return  service.getUser(user_email).then(user => {
          // dispatch
          dispatch({
              type: userConstants.LOGIN_REQUEST,
              data: user
          });
      });
  };
    
 
}