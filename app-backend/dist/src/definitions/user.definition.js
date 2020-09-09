"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { gql } = require('apollo-server-lambda');
const User = gql `

    type User{
        user_email: String!
        first_name: String!
        last_name: String!
        contact_no: String!
        type: String!

    }
    extend type Query{
        getUserInfo(user_email: String!): User
    }
`;
module.exports = User;
