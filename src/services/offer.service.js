import client from "./client";
import gql from "graphql-tag";

export default  class OfferService{
    async getOffers(business_id = 1){
        const response= await  client.query({
            variables: { business_id },
            query: gql`
            query getAllOffers($business_id: Int!){
                getAllOffers(business_id: $business_id){
                    offer_title
                    description
                    image
                  }
                }
            `
        });
            return response.data.getAllOffers;
    }  
}
