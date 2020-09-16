"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const BaseService = require('./base.service');
class VacancyService extends BaseService {
    constructor(event, db) {
        super(event, db);
    }
    ;
    addVacancy(vacancy) {
        return __awaiter(this, void 0, void 0, function* () {
            let result = yield this.db('vacancy').insert(vacancy);
            let vacancy_id = result[0];
            return vacancy_id;
        });
    }
    updateVacancy(vacancy) {
        return __awaiter(this, void 0, void 0, function* () {
            let vacancy_id = vacancy.vacancy_id;
            delete vacancy.vacancy_id;
            let result = yield this.db('vacancy').update(vacancy).where('vacancy_id', vacancy_id);
            return vacancy_id;
        });
    }
    getAllVacancies(business_id) {
        return __awaiter(this, void 0, void 0, function* () {
            let vacancyList = yield this.db('vacancy').where('business_id', business_id);
            return vacancyList;
        });
    }
}
;
module.exports = VacancyService;
