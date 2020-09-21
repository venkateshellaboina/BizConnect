"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { gql } = require('apollo-server-lambda');
const TimingsInput = gql `
    input TimingsInput{
        id: Int
        day: String!
        start_time: String!
        end_time: String!
        break_start_time: String
        break_end_time:  String
        business_id: Int
    }
`;
module.exports = TimingsInput;
