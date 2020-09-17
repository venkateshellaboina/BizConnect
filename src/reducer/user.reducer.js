import { userConstants } from '../constant';

export const AuthState= {
    LOGIN :'login',
    REGISTER :'create'
  }
const initialState = {
  authenticated:  false,
  authState: null,
  user_email: null,
  user_id: null
};

export function userReducer(state = initialState, action) {
  switch (action.type) {
    case userConstants.LOGIN_REQUEST:
        return {
          ...state,
          authState: 'loggedIn',
          authenticated: true,
          user_email: action.data.user_email,
          user_id: action.data.id
        };
    default:
      return state;
  }
}