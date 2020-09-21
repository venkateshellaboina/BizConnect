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
                    timings{
                        day
                        start_time
                        end_time
                        break_start_time
                        break_end_time
                    }
                    rating
                }
            }
            `
        });
            return response.data.getBusinessList;
    }
    async getBusinessCategoriesList(){
        try{
            const response= await  client.query({
                query: gql`
                    query business{
                        getBusinessCategories
                    }
                `
            });
                return response.data.getBusinessCategories;
        }
        catch(e){
            return [];
        }
        
    }   
}
