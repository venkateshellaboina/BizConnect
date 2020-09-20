import client from "./client";
import gql from "graphql-tag";

export default class BusinessService {
  async addBusiness(business) {
    try {
      const mutation = gql`
        mutation addBusinessDetails($business: BusinessInput) {
          addBusinessDetails(business: $business)
        }
      `;
      const response = await client.mutate({
        variables: { business: business },
        mutation
      });
      return response.data.addBusinessDetails;
    } catch (e) {
      return e.message;
    }
  }

  async updateBusinessDetailsBusiness(business) {
    try {
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
      return response.data;
    } catch (e) {
      return e.message;
    }
  }
}
