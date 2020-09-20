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
  
}
