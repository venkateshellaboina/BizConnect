export {}
const { gql } = require('apollo-server-lambda');

const LocationInput = gql`
    input LocationInput{
        city: String
        region : String
        zipcode : Int
        country: String
        latitude: Float
        longitude: Float
        address1: String
        address2: String
    }
`;

module.exports = LocationInput;