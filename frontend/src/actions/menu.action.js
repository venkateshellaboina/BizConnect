import { Dispatch } from 'redux';
import { menuConstants} from '../constant';
import MenuService from  '../services/menu.service';
const service = new MenuService();

export function getMenuItems(businessId) {
    let business_id = parseInt(businessId);
    return function(dispatch) {
      return  service.getMenuItems(business_id).then(menuItemsList => {
          // dispatch
          dispatch({
              type: menuConstants.GET_MENU_LIST,
              data: menuItemsList
          });
      });
  };
    
}

export function getMenuCategories(businessId) {
    let business_id = parseInt(businessId);
    return function(dispatch) {
      return  service.getMenuCategories(business_id).then(menuCategories => {
          // dispatch
          dispatch({
              type: menuConstants.GET_MENU_CATEGORIES,
              data: menuCategories
          });
      });
  };
    
}
