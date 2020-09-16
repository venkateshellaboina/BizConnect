"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { gql } = require("apollo-server-lambda");
const CustomerInput = gql `

input CustomerInput{
    user_email: String!
    first_name: String
    last_name: String
}

`;
module.exports = CustomerInput;
