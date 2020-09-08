"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { gql } = require('apollo-server-lambda');
const root = gql `
    type Query {
        root: String
    }
    type Mutation{
        root: String
    }

`;
module.exports = root;
