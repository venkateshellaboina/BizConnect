export {}
const { gql } = require('apollo-server-lambda');

const menu = gql`

    type Menu{
        item_id: Int!
        item_name: String!
        price: String!
        quantity: String!
        unit: String!
        description: String!
        item_category : String!
        business_id: Int!
        is_available: Int!
    }
    type MenuCategory{
        item_category: String!
        description: String
        business_id: Int!
    }
    extend type Query{
        getMenuItems(business_id: Int): [Menu]
        getMenuCategories(business_id: Int): [MenuCategory]
    }
    extend type Mutation{
        addMenuItem(item: MenuInput): Int!
        addMenuCategory(category: MenuCategoryInput): Int!
    }
`;

module.exports = menu;