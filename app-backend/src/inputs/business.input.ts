export {}
const { gql } = require('apollo-server-lambda');

const BusinessInput = gql`
    input BusinessInput{
        business_id : Int
        user_email: String!
        name : String!
        category : String!
        contact_details: String!
        description: String!
        avatar: String
        location: LocationInput
        timings: [TimingsInput]
        gallery: [BusinessGalleryInput]
    }
    input BusinessGalleryInput{
        image_id: Int,
        business_id: Int!,
        location: String!,
        description: String
    }
`;

module.exports = BusinessInput;