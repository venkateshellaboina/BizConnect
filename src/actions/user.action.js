import { Dispatch } from 'redux';
import { userConstants} from '../constant';
import UserService from  '../services/user';
const service = new UserService();
/**
 * Dispatch login request to trigger origin modal to login
 */


  export function login() {
    return function(dispatch) {
      return  service.getUser("negi@gmail.com").then(comments => {
          // dispatch
          dispatch({
              type: userConstants.LOGIN_REQUEST,
              data:comments
          });
      });
  };
    
 
}