import { menuConstants } from '../constant';

const initialState = {
    menuItemsList : [],
    menuCategories: []
};

export function menuReducer(state = initialState, action) {
  switch (action.type) {
    case menuConstants.GET_MENU_LIST:
        console.log('data ' + action.data)
        return {
          ...state,
          menuItemsList : action.data
        };
    case menuConstants.GET_MENU_CATEGORIES:
      return{
        ...state,
        menuCategories : action.data
      }
    default:
      return state;
  }
}