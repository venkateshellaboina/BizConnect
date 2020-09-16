export {}

const vacancyResolver = {
    Query: {
        getAllVacancies: async (root, args, {VacancyService}) => VacancyService.getAllVacancies(args.business_id)
    },
    Mutation: {
        addVacancy: async (root, {vacancy}, {VacancyService}) => VacancyService.addVacancy(vacancy),
        updateVacancy: async (root, {vacancy}, {VacancyService}) => VacancyService.updateVacancy(vacancy),

    }
}
module.exports = vacancyResolver;