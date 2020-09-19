import { Dispatch } from 'redux';
import { vacancyConstants} from '../constant';
import VacancyService from  '../services/vacancy.service';
const service = new VacancyService();

export function getVacancies(businessId) {
   
    return function(dispatch) {
      return  service.getVacancies(businessId).then(vacanciesList => {
          // dispatch
          dispatch({
              type: vacancyConstants.GET_VACANCY_LIST,
              data: vacanciesList
          });
      });
  };
    
}