import { Dispatch } from 'redux';
import { menuConstants} from '../constant';
import MenuService from  '../services/menu.service';
const service = new MenuService();

export function getMenuItems(businessId) {
   
    return function(dispatch) {
      return  service.getMenuItems(businessId).then(menuItemsList => {
          // dispatch
          dispatch({
              type: menuConstants.GET_MENU_LIST,
              data: menuItemsList
          });
      });
  };
    
}

export function getMenuCategories(businessId) {
   
    return function(dispatch) {
      return  service.getMenuCategories(businessId).then(menuCategories => {
          // dispatch
          dispatch({
              type: menuConstants.GET_MENU_CATEGORIES,
              data: menuCategories
          });
      });
  };
    
}