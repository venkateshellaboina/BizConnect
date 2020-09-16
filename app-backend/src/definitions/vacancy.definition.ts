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

    extend type Query{
        getAllVacancies(business_id: Int!): [Vacancy]
    }

    extend type Mutation{
        addVacancy(vacancy: VacancyInput): Int!
        updateVacancy(vacancy: VacancyInput): Int!

    }
`;

module.exports = Vacancy;