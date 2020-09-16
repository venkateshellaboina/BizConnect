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
const vacancyResolver = {
    Query: {
        getAllVacancies: (root, args, { VacancyService }) => __awaiter(void 0, void 0, void 0, function* () { return VacancyService.getAllVacancies(args.business_id); })
    },
    Mutation: {
        addVacancy: (root, { vacancy }, { VacancyService }) => __awaiter(void 0, void 0, void 0, function* () { return VacancyService.addVacancy(vacancy); }),
        updateVacancy: (root, { vacancy }, { VacancyService }) => __awaiter(void 0, void 0, void 0, function* () { return VacancyService.updateVacancy(vacancy); }),
    }
};
module.exports = vacancyResolver;
