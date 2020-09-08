export {}
const { gql } = require('apollo-server-lambda');

const menu = gql`

type Menu{
    item_id: String!
    item_name: String!
    price: String!
    quantity: String!
    unit: String!
    description: String!
    item_category : String!
    business_id: Int!
    is_available: Int!
}
`;

module.exports = menu;