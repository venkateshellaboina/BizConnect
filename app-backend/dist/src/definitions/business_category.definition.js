"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { gql } = require('apollo-server-lambda');
const Business_Category = gql `
    type Business_Category{
       name : String!
       description: String!
       image: String!
    }
`;
module.exports = Business_Category;
