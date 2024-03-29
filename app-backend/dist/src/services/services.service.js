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
class ServicesService extends BaseService {
    constructor(event, db) {
        super(event, db);
    }
    ;
    addService(service) {
        return __awaiter(this, void 0, void 0, function* () {
            let result = yield this.db('services').insert(service);
            let service_id = result[0];
            return service_id;
        });
    }
    updateService(service) {
        return __awaiter(this, void 0, void 0, function* () {
            let service_id = service.service_id;
            delete service.service_id;
            let result = yield this.db('services').update(service).where('service_id', service_id);
            return service_id;
        });
    }
    getAllServices(business_id) {
        return __awaiter(this, void 0, void 0, function* () {
            let servicesList = yield this.db('services').where('business_id', business_id);
            return servicesList;
        });
    }
}
;
module.exports = ServicesService;
