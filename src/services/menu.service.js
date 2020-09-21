import client from "./client";
import gql from "graphql-tag";

export default  class MenuService{
    async getMenuItems(business_id){
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
        if(response.data.getMenuItems)
            return response.data.getMenuItems;

        return [
            {item_category: "Fruits",
            item_name: "Apple Royal",
            price: "199",
            quantity: "4",
            __typename: "Menu"},
            {item_category: "Grocery",
            item_name: "Sample item",
            price: "100",
            quantity: "1",
            __typename: "Menu"}
        ];
    }
    async getMenuCategories(business_id){
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
