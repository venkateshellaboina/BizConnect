"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { gql } = require('apollo-server-lambda');
const Customer = gql `

    type Customer{
        customer_id : Int!
        user_email: String!
        first_name: String
        last_name: String
        contact_no: String
    }

    extend type Query{
        getCustomerDetails(customer_id: Int!): Customer
    }

    extend type Mutation{
        addCustomerDetails(customer: CustomerInput): Int
    }
`;
module.exports = Customer;
