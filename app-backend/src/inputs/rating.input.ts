export {}
const { gql } = require('apollo-server-lambda');

const RatingInput = gql`
    input RatingAddInput{
        id: Int!
        customer_id: Int!
        business_id: Int!
        rating: Int!
        review_comment: String!
    }
`;

module.exports = RatingInput;