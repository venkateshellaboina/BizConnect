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
    extend type Query{
        getMenuItems(business_id: Int): [Menu]
    }
    extend type Mutation{
        addMenuItem(item: MenuInput): Int!
    }
`;

module.exports = menu;