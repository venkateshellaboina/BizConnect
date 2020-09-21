import { vacancyConstants } from '../constant';

const initialState = {
    vacanciesList : []
};

export function vacancyReducer(state = initialState, action) {
  switch (action.type) {
    case vacancyConstants.GET_VACANCY_LIST:
        console.log('data ' + action.data)
        return {
          vacanciesList : action.data
        };
    default:
      return state;
  }
}