import client from "./client";
import gql from "graphql-tag";

export default class BusinessService {
  async addBusiness(business) {
    
      const mutation = gql`
        mutation addBusinessDetails($business: BusinessInput) {
          addBusinessDetails(business: $business)
        }
      `;
      const response = await client.mutate({
        variables: { business: business },
        mutation
      });
      return response;
    
  }

  async updateBusinessDetailsBusiness(business) {
    
      const mutation = gql`
        mutation updateBusinessDetailsBusinessDetails(
          $business: BusinessInput
        ) {
          updateBusinessDetailsBusinessDetails(business: $business)
        }
      `;
      const response = await client.mutate({
        variables: { business: business },
        mutation
      });
      return response;
    } 
    async getBuisnessDetails(id) {
      const response = await client.query({
        variables: { id:id },
        query: gql`
        query getBusinessDetails($id:Int!){
          getBusinessDetails(business_id: $id
          ){
            user_email
            name
            description
            category
            contact_details
            location{
              address1
              address2
              city
              region
              country
              zipcode
            }
            avatar
            rating
            timings{
              day
              start_time
              end_time
              break_start_time
              break_end_time
            }
           
          }
        }
        
        `,
      });
      return response;
    }
}


