import client from "./client";
import gql from "graphql-tag";

export default  class ReviewService{
    async getReviews(business_id = 1){
        const response= await  client.query({
            variables: { business_id },
            query: gql`
            query getAllRatings($business_id: Int!){
                getAllRatings(business_id: $business_id){
                    id
                    first_name
                    last_name
                    review_comment
                    rating
                  }
                }
            `
        });
            return response.data.getAllRatings;
    }  
}
