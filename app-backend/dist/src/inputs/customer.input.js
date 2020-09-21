"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { gql } = require("apollo-server-lambda");
const CustomerInput = gql `

input CustomerInput{
    customer_id : Int
    user_email: String!
    first_name: String!
    last_name: String!
    contact_no: String
}

`;
module.exports = CustomerInput;
