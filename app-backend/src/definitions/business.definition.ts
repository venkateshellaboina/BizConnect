export {}
const { gql } = require('apollo-server-lambda');

const Business = gql`
    type Business{
       business_id : Int!
       user_email: String!
       name : String
       category : String
       contact_details: String
       description: String
       avatar: String
       location: Location
       rating: Float
       timings: [Timings]
       gallery: [BusinessGallery]
    }
    type BusinessGallery{
        image_id: Int,
        business_id: Int,
        location: String,
        description: String
    }
    extend type Query{
        getBusinessDetails(business_id: Int!): Business!
        getBusinessList(category: String, searchKey: String): [Business]
        getBusinessCategories : [String]
    }
    extend type Mutation{
        addBusinessDetails(business: BusinessInput): Int!
    }
`;

module.exports = Business;
// getBusinessMenuList(email: String!): [Menu]
