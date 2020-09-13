export {}
const { gql } = require('apollo-server-lambda');

const MenuInput = gql`
    input MenuInput{
        item_name: String!
        price: Float!
        quantity: Int!
        unit: String!
        description: String!
        item_category : String!
        business_id: Int!
        is_available: Int!
    }
`;

module.exports = MenuInput;