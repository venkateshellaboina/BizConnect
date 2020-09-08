export {}
const { gql } = require('apollo-server-lambda');

const Customer = gql`

    type Customer{
        customer_id : Int!
        user_email: String!
    }

    extend type Query{
        getCustomerDetails(user_email: String!): Customer
    }
`;

module.exports = Customer;