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
    // async getBusinessCategoriesList(){
    //     const response= await  client.query({
    //         query: gql`
    //             query business{
    //                 getBusinessCategories
    //             }
    //         `
    //     });
    //         return response.data.getBusinessCategories;
    // }   
}
