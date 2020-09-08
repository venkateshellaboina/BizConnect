"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { gql } = require('apollo-server-lambda');
const menu = gql `

type Menu{
    item_id: String!
    item_name: String!
    price: String!
    quantity: String!
    unit: String!
}
`;
module.exports = menu;
