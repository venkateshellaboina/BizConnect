import { menuConstants } from '../constant';

const initialState = {
    menuItemsList : []
};

export function menuReducer(state = initialState, action) {
  switch (action.type) {
    case menuConstants.GET_MENU_LIST:
        console.log('data ' + action.data)
        return {
          menuItemsList : action.data
        };
    default:
      return state;
  }
}