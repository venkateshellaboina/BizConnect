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

// export function changeBusinessCategory(businessCategory){
//     return function(dispatch){
//         return dispatch({
//                 type: customerConstants.CHANGE_BUSINESS_CATEGORY,
//                 businessCategory : businessCategory
//             })   
//     }
// }

// export function getBusinessCategoriesList(){
//     return function(dispatch){
//         return  service.getBusinessCategoriesList().then(businessCategoriesList => {
//             // dispatch
//             dispatch({
//                 type: customerConstants.GET_BUSINESS_CATEGORIES,
//                 businessCategoriesList: businessCategoriesList
//             });
//         });
//     }
// }