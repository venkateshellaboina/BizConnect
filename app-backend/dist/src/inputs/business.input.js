"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { gql } = require('apollo-server-lambda');
const BusinessInput = gql `
    input BusinessInput{
        user_email: String!
        business_id: Int
        name : String
        category : String
        contact_details: String
        description: String
        location: LocationInput
        avatar : String
    }
`;
module.exports = BusinessInput;
