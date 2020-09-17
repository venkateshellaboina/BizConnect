"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { gql } = require('apollo-server-lambda');
const LocationInput = gql `
    input LocationInput{
        city: String
        region : String
        zipcode : Int
        country: String
        latitude: Float
        longitude: Float
        address1: String
        address2: String
        business_id: Int
    }
`;
module.exports = LocationInput;
