"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { gql } = require('apollo-server-lambda');
const OfferInput = gql `
    input OfferInput{
        offer_id: Int
        offer_title: String!
        business_id: Int!
        image: String
        description: String!
    }
`;
module.exports = OfferInput;
