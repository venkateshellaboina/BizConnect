export {}
const { gql } = require('apollo-server-lambda');

const Rating = gql`

type Rating{
    id: Int!
    customer_id: Int!
    business_id: Int!
    rating: Int!
    review_comment: String!
    created_date:  String!
}
`;

module.exports = Rating;