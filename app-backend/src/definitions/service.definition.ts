export {}
const { gql } = require('apollo-server-lambda');

const Service = gql`

    type Service{
        service_id: Int!
        title: String!
        description: String
        image: String
        type: String!
        business_id:  Int!
        is_available: Int
    }
    extend type Query{
        getAllServices(business_id: Int!): [Service]
    }

    extend type Mutation{
        addService(service: ServiceInput): Int!
        updateService(service: ServiceInput): Int!

    }
`;

module.exports = Service;