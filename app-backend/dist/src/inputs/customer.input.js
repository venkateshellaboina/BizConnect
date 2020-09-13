"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { gql } = require("apollo-server-lambda");
const CustomerInput = gql `

input CustomerInput{
    user_email: String!
}

`;
module.exports = CustomerInput;
