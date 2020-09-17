import client from "./client";
import gql from "graphql-tag";

export default  class CustomerService{
  async getBusinessList(category = "Grocery"){
   const response= await  client.query({
      variables: { category },
      query: gql`
      query business($category:String!) {
          getBusinessList(category: $category){
              business_id
              user_email
              name
              category
              contact_details
              description
            }
        }
      `
    });
  return response.data.getBusinessList;
}
}
