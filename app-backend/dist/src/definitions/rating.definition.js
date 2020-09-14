"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { gql } = require('apollo-server-lambda');
const Rating = gql `

    type Rating{
        id: Int!
        customer_id: Int!
        business_id: Int!
        rating: Int!
        review_comment: String!
        created_date:  String!
        first_name: String
        last_name: String
    }

    extend type Query{
        getAllRatings(business_id: Int): [Rating]
    }

    extend type Mutation{
        addRating(rating: RatingAddInput): Int!
        updateRating(rating: RatingAddInput): Int!
    }
`;
module.exports = Rating;
