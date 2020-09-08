export {}
const { gql } = require('apollo-server-lambda');

const Business_Category = gql`
    type Business_Category{
       name : String!
       description: String!
       image: String!
    }
`;

module.exports = Business_Category;