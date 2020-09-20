import { userConstants } from '../constant';
import * as Cookies from 'es-cookie';
let email = Cookies.get('user_email');
export const AuthState= {
    LOGIN :'login',
    REGISTER :'create'
  }
const initialState = {
  authenticated:  false,
  authState: null,
  user_email: email,
  user_id: null,
  signUp:false,
  user:null
};

export function userReducer(state = initialState, action) {
  switch (action.type) {
       
    case userConstants.LOGIN_REQUEST:
      const expires = new Date();
      expires.setSeconds(expires.getSeconds() + 3600 * 24);
      Cookies.set('user_email',action.data.user_email,expires);
        return {
          ...state,
          authState: 'loggedIn',
          authenticated: true,
          user_email: action.data.user_email,
          user_id: action.data.id,
          user:action.data
        };
      
    case userConstants.USER_SIGNUP:
      return{
        ...state,
        user_email:action.data
      }
    default:
      return state;
  }
}