export {}
const { gql } = require('apollo-server-lambda');

const Business = gql`
    type Business{
       business_id : Int!
       user_email: String!
       email_id: String!
       name : String!
       category : Business_Category!
       location : Location
       contact_details: [String]!
       status : [Timings]!
    }
`;

module.exports = Business;