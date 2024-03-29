"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { gql } = require('apollo-server-lambda');
const MenuInput = gql `
    input MenuInput{
        item_name: String!
        price: Float!
        quantity: Int!
        unit: String!
        description: String!
        item_category : String!
        business_id: Int!
        is_available: Int!
    }
    input MenuCategoryInput{
        item_category: String!
        description: String
        business_id: Int!
    }
`;
module.exports = MenuInput;
