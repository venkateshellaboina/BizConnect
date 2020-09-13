"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { gql } = require('apollo-server-lambda');
const Customer_Subscriptions = gql `
    type Customer_Subscriptions{
       customer_id : Int!
       business_id: Int!
    }

    extend type Mutation{
        addSubscription(subscribe_mapping: SubscriptionInput): String
        removeSubscription(unsubscribe_mapping: SubscriptionInput): String
    }
`;
module.exports = Customer_Subscriptions;
