"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { gql } = require("apollo-server-lambda");
const SubscriptionInput = gql `

    input SubscriptionInput{
        customer_id : Int!
        business_id: Int!
    }

`;
module.exports = SubscriptionInput;
