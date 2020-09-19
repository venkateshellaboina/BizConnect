import client from "./client";
import gql from "graphql-tag";

export default  class ServiceService{
    async getServices(business_id = 1){
        const response= await  client.query({
            variables: { business_id },
            query: gql`
            query getAllServices($business_id: Int!){
                getAllServices(business_id: $business_id){
                    service_id
                    title
                    description
                    type
                    image
                  }
                }
            `
        });
            return response.data.getAllServices;
    }  
}
