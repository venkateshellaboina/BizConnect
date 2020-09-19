import { Dispatch } from 'redux';
import { offerConstants} from '../constant';
import OfferService from  '../services/offer.service';
const service = new OfferService();

export function getOffers(businessId) {
   
    return function(dispatch) {
      return  service.getOffers(businessId).then(offersList => {
          // dispatch
          dispatch({
              type: offerConstants.GET_OFFER_LIST,
              data: offersList
          });
      });
  };
    
}