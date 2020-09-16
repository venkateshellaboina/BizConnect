export {};
const BaseService = require('./base.service');

class VacancyService extends BaseService{
    constructor(event: any, db: any){
        super(event, db);
    };
    async addVacancy(vacancy: any){
        let result = await this.db('vacancy').insert(vacancy);
        let vacancy_id = result[0];
        return vacancy_id;
    }
    async updateVacancy(vacancy: any){
        let vacancy_id = vacancy.vacancy_id;
        delete vacancy.vacancy_id;
        let result = await this.db('vacancy').update(vacancy).where('vacancy_id', vacancy_id);
        return vacancy_id;
    }
    async getAllVacancies(business_id: number){
        let vacancyList = await this.db('vacancy').where('business_id', business_id);
        return vacancyList;
    }
};

module.exports = VacancyService;