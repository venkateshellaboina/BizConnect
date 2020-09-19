export {}
const { gql } = require('apollo-server-lambda');

const UserInput = gql`
    input UserInput{
        user_email: String
        first_name: String!
        last_name: String
        contact_no: String
        type: String!
        password: String!
    }
`;

module.exports = UserInput;