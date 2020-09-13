import { Dispatch } from 'redux';
import { userConstants} from '../constant';


/**
 * Dispatch login request to trigger origin modal to login
 */
export const login = () => (dispatch) => {
  
    dispatch({
      type: userConstants.LOGIN_REQUEST
    });
  };