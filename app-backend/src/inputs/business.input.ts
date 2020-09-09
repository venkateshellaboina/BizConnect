export {}
const { gql } = require('apollo-server-lambda');

const BusinessInput = gql`
    input BusinessInput{
        user_email: String!
        name : String
        category : String
        contact_details: String
        description: String
        location_id: Int!
    }
`;

module.exports = BusinessInput;