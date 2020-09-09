export {}
const { gql } = require('apollo-server-lambda');

const root = gql`
    type Query {
        root: String
    }
    type Mutation{
        root: String
    }

`;

module.exports = root;