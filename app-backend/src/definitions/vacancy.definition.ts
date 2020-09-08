export {}
const { gql } = require('apollo-server-lambda');

const Vacancy = gql`

type Vacancy{
    vacancy_id: Int!
    title: String!
    description: String!
    image: String!
    count: Int!
    business_id: Int!
}
`;

module.exports = Vacancy;