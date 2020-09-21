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
    getBusinessByEmail(user_email) {
        return __awaiter(this, void 0, void 0, function* () {
            let result = yield this.db('business_details').where('user_email', user_email);
            let business = result[0];
            return business;
        });
    }
    getAll(category, searchKey) {
        return __awaiter(this, void 0, void 0, function* () {
            let strQuery = "SELECT * FROM business_details ";
            if (category) {
                strQuery += ` WHERE category = '${category}' `;
                if (searchKey) {
                    searchKey = searchKey.toLowerCase();
                    strQuery += ` AND ( name LIKE '%${searchKey}%' OR description LIKE '%${searchKey}%' )`;
                }
            }
            else {
                if (searchKey) {
                    searchKey = searchKey.toLowerCase();
                    strQuery += ` WHERE ( name LIKE '%${searchKey}%' OR description LIKE '%${searchKey}%' )`;
                }
            }
            console.log('query : ' + strQuery);
            let result = yield this.db.raw(strQuery);
            let businessList = result[0];
            return businessList;
        });
    }
    addBusinessDetails(business, LocationService, TimingsService) {
        return __awaiter(this, void 0, void 0, function* () {
            let location = business.location;
            delete business.location;
            let timings = business.timings;
            delete business.timings;
            let gallery = business.gallery;
            delete business.gallery;
            let result = yield this.db('business_details').insert(business);
            let business_id = result[0];
            let services = [];
            if (location) {
                location.business_id = business_id;
                let locationService = LocationService.addLocation(location);
                services.push(locationService);
            }
            if (timings && timings.length > 0) {
                timings = timings.map(timing => {
                    timing.business_id = business_id;
                    return timing;
                });
                let timingsService = TimingsService.addTimings(timings);
                services.push(timingsService);
            }
            if (gallery && gallery.length > 0) {
                gallery = gallery.map(galleryItem => {
                    galleryItem.business_id = business_id;
                    return galleryItem;
                });
                let galleryService = this.addBusinessGallery(gallery);
                services.push(galleryService);
            }
            let servicesResult = yield Promise.all(services);
            return business_id;
        });
    }
    updateBusinessDetails(business, LocationService, TimingsService) {
        return __awaiter(this, void 0, void 0, function* () {
            let location = business.location;
            delete business.location;
            let timings = business.timings;
            delete business.timings;
            let gallery = business.gallery;
            delete business.gallery;
            let business_id = business.business_id;
            delete business.business_id;
            delete business.user_email;
            let result = yield this.db('business_details').update(business).where('business_id', business_id);
            let services = [];
            if (location) {
                let locationService = LocationService.updateLocation(location);
                services.push(locationService);
            }
            if (timings && timings.length > 0) {
                let timingsService = TimingsService.updateTimings(timings);
                services.push(timingsService);
            }
            if (gallery && gallery.length > 0) {
                let galleryService = this.updateBusinessGallery(gallery);
                services.push(galleryService);
            }
            let servicesResult = yield Promise.all(services);
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
    updateBusinessGallery(gallery) {
        return __awaiter(this, void 0, void 0, function* () {
            let result = yield this.db('business_images').insert(gallery);
            return result[0];
        });
    }
    getBusinessCategories() {
        return __awaiter(this, void 0, void 0, function* () {
            let result = yield this.db.select('name').from('business_categories');
            let business_categories = result.map(category => category.name);
            console.log('business_categories ' + JSON.stringify(business_categories));
            return business_categories;
        });
    }
}
module.exports = BusinessService;
