"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { gql } = require('apollo-server-lambda');
const Business = gql `
    type Business{
       business_id : Int!
       user_email: String!
       name : String
       category : String
       contact_details: String
       description: String
       location_id: Int
       location: Location
       timings: [Timings]
    }
    
    extend type Query{
        getBusinessDetails(email: String!): Business!
    }
    extend type Mutation{
        addBusinessDetails(business: BusinessInput): Business
    }
`;
module.exports = Business;
// getBusinessMenuList(email: String!): [Menu]
