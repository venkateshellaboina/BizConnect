import client from "./client";
import gql from "graphql-tag";

export default  class CustomerService{
    async getBusinessList(businessCategory, searchKey){
        console.log(' business list category ' + businessCategory);
        const response= await  client.query({
            variables: { businessCategory, searchKey },
            query: gql`
            query business($businessCategory:String, $searchKey: String) {
                getBusinessList(category: $businessCategory, searchKey: $searchKey){
                    business_id
                    user_email
                    name
                    category
                    contact_details
                    description
                    avatar
                    location{
                        address1
                    }
                    }
                }
            `
        });
            return response.data.getBusinessList;
    }
    async getBusinessCategoriesList(){
        const response= await  client.query({
            query: gql`
                query business{
                    getBusinessCategories
                }
            `
        });
            return response.data.getBusinessCategories;
    }   
}
