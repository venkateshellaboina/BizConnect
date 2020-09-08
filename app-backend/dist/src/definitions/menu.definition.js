"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { gql } = require('apollo-server-lambda');
const menu = gql `

type Menu{
    item_id: Int!
    item_name: String!
    price: String!
    quantity: String!
    unit: String!
    description: String!
    item_category : String!
    business_id: Int!
    is_available: Int!
}
`;
module.exports = menu;
