"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { gql } = require('apollo-server-lambda');
const Location = gql `
    type Location{
       location_id : Int!
       city: String!
       region: String!
       country: String!
       zipcode: String!
       latitude: Float!
       longitude: Float!
       address1: String
       address2: String
    }
   
`;
module.exports = Location;
