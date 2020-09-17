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
        password: String!
        id: Int!

    }
    extend type Query{
        getUser(user_email: String!): User
    }
    extend type Mutation{
        addUser(user: UserInput): String!
        updateUser(user: UserInput): String!
    }
`;
module.exports = User;
