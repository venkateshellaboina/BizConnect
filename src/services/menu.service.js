import client from "./client";
import gql from "graphql-tag";

export default  class MenuService{
    async getMenuItems(business_id = 1){
        const response= await  client.query({
            variables: { business_id },
            query: gql`
            query getMenuItems($business_id: Int!){
                getMenuItems(business_id: $business_id){
                    item_id
                    item_category
                    item_name
                    description
                    unit
                    quantity
                    price
                  }
                }
            `
        });
        return response.data.getMenuItems;
    }
    async getMenuCategories(business_id =1){
        const response= await  client.query({
            variables: { business_id },
            query: gql`
            query getMenuCategoriesQuery($business_id: Int!){
                getMenuCategories(business_id: $business_id){
                    item_category
                    description
                    business_id
                  }
                }
            `
        });
        return response.data.getMenuCategories;
    }
}
