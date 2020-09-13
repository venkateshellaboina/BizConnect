"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { gql } = require('apollo-server-lambda');
const Customer = gql `

    type Customer{
        customer_id : Int!
        user_email: String!
    }

    extend type Query{
        getCustomerDetails(user_email: String!): Customer
        getBusinessList(category: String, searchKey: String): [Business]
    }

    extend type Mutation{
        addCustomerDetails(customer: CustomerInput): Int
    }
`;
module.exports = Customer;
