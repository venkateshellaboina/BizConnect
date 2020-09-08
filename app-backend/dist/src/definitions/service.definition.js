"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { gql } = require('apollo-server-lambda');
const Service = gql `

type Service{
    service_id: Int!
    title: String!
    description: String!
    image: String!
    type: String!
    business_id:  Int!
    is_available: Int!
}
`;
module.exports = Service;
