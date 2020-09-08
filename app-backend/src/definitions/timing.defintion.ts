export {}
const { gql } = require('apollo-server-lambda');

const Timing = gql`

type Timing{
    id: Int!
    day: String!
    start_time: String!
    end_time: String!
    break_start_time: String!
    break_end_time:  Int!
    business_id: Int!
}
`;

module.exports = Timing;