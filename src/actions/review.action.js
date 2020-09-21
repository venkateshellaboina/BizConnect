import { Dispatch } from 'redux';
import { reviewConstants} from '../constant';
import ReviewService from  '../services/review.service';
const service = new ReviewService();

export function getReviews(businessId) {
    let business_id = parseInt(businessId);
    return function(dispatch) {
      return  service.getReviews(business_id).then(reviewsList => {
          // dispatch
          dispatch({
              type: reviewConstants.GET_REVIEW_LIST,
              data: reviewsList
          });
      });
  };
    
}