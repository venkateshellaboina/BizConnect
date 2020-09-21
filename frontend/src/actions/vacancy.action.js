import { Dispatch } from 'redux';
import { vacancyConstants} from '../constant';
import VacancyService from  '../services/vacancy.service';
const service = new VacancyService();

export function getVacancies(businessId) {
let business_id = parseInt(businessId);
   
    return function(dispatch) {
      return  service.getVacancies(business_id).then(vacanciesList => {
          // dispatch
          dispatch({
              type: vacancyConstants.GET_VACANCY_LIST,
              data: vacanciesList
          });
      });
  };
    
}