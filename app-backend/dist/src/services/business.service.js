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
    getBusinessDetails(business_id) {
        return __awaiter(this, void 0, void 0, function* () {
            let businessInfo = this.getBusinessInfo(business_id);
            let businessGallery = this.getBusinessGallery(business_id);
            let result = yield Promise.all([businessInfo, businessGallery]);
            let business = result[0];
            business.gallery = result[1];
            return business;
        });
    }
    getAll(category, searchKey) {
        return __awaiter(this, void 0, void 0, function* () {
            let businessList = yield this.db('business_details').where('category', category);
            return businessList;
        });
    }
    addBusinessDetails(business, LocationService) {
        return __awaiter(this, void 0, void 0, function* () {
            let location = business.location;
            let location_id = yield LocationService.addLocation(location);
            delete business.location;
            business.location_id = location_id;
            let result = yield this.db('business_details').insert(business);
            let business_id = result[0];
            return business_id;
        });
    }
    getBusinessInfo(business_id) {
        return __awaiter(this, void 0, void 0, function* () {
            let result = yield this.db('business_details').where('business_id', business_id);
            let business = result[0];
            return business;
        });
    }
    getBusinessGallery(business_id) {
        return __awaiter(this, void 0, void 0, function* () {
            let gallery = yield this.db('business_images').where('business_id', business_id);
            return gallery;
        });
    }
}
module.exports = BusinessService;
