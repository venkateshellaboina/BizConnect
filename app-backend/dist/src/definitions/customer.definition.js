"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { gql } = require('apollo-server-lambda');
const Customer = gql `

    type Customer{
        customerId : Int!
        user_email: String!
    }

    extend type Query{
        getCustomerDetails(user_email: String!): Customer
    }
`;
module.exports = Customer;
