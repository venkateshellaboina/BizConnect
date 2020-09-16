export {}
const { gql } = require('apollo-server-lambda');

const VacancyInput = gql`
    input VacancyInput{
        vacancy_id: Int
        title: String!
        description: String
        image: String!
        count: Int!
        business_id: Int!
    }
`;

module.exports = VacancyInput;