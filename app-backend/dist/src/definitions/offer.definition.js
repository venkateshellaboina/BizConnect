"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { gql } = require('apollo-server-lambda');
const Offer = gql `

    type Offer{
        offer_id: Int!
        offer_title: String!
        business_id: Int!
        image: String!
        description: String!
    }
    extend type Query{
        getAllOffers(business_id: Int!): [Offer]
    }
    extend type Mutation{
        addOffer(offer: OfferInput): Int!
        updateOffer(offer: OfferInput): Int!
    }
`;
module.exports = Offer;
