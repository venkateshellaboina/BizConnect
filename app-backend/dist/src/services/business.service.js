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
class BusinessService extends BaseService {
    constructor(event, db) {
        super(event, db);
    }
    getBusinessDetails(email) {
        return __awaiter(this, void 0, void 0, function* () {
            let business = yield this.db('business_details')
                .where('user_email', email)
                .then(businesses => {
                let business = businesses[0];
                return business;
            });
            return business;
        });
    }
    getAll(category, searchKey) {
        return __awaiter(this, void 0, void 0, function* () {
            let businessList = yield this.db('business_details')
                .where('category', category)
                .then(result => result);
            return businessList;
        });
    }
    addBusinessDetails(business, LocationService) {
        return __awaiter(this, void 0, void 0, function* () {
            let location = business.location;
            let location_id = yield LocationService.addLocation(location);
            delete business.location;
            business.location_id = location_id;
            let business_id = yield this.db('business_details')
                .insert(business)
                .then(result => {
                let business_id = result[0];
                return business_id;
            })
                .catch((err) => { console.log('Error inserting record to business_details'); return err; });
            return business_id;
        });
    }
}
module.exports = BusinessService;
