import client from "./client";
import gql from "graphql-tag";

export default  class VacancyService{
    async getVacancies(business_id){
        const response= await  client.query({
            variables: { business_id },
            query: gql`
            query getVacancies($business_id: Int!){
                getAllVacancies(business_id: $business_id){
                    title
                    description
                    count
                    image
                  }
                }
            `
        });
            return response.data.getAllVacancies;
    }  
}
