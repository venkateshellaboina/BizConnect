import { userConstants } from '../constant';

export const AuthState= {
    LOGIN :'login',
    REGISTER :'create'
  }
const initialState = {
  authenticated:  false,
  authState: null,
  user: null
};

export function userReducer(state = initialState, action) {
  switch (action.type) {
    case userConstants.LOGIN_REQUEST:
        return {
          ...state,
          authState: AuthState.LOGIN
        };
    default:
      return state;
  }
}