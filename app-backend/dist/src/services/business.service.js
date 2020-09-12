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
const LocationService = require('./location.service');
class BusinessService {
    constructor(event, db) {
        this.event = event;
        this.db = db;
    }
    getBusinessDetails(email) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                this.db('business_details')
                    .where('user_email', email)
                    .then(businesses => {
                    if (!businesses) {
                        reject('No Businesses found');
                    }
                    else {
                        let business = businesses[0];
                        resolve(business);
                    }
                });
            });
        });
    }
    addBusinessDetails(business) {
        return __awaiter(this, void 0, void 0, function* () {
            let location = business.location;
            let locationService = new LocationService(this.event, this.db);
            let location_id = yield locationService.addLocation(location);
            delete business.location;
            business.location_id = location_id;
            return new Promise((resolve, reject) => {
                this.db('business_details')
                    .insert(business)
                    .then(result => {
                    let business_id = result[0];
                    // this.db('business_details')
                    //     .where('user_email', business.user_email)
                    //     .then( businessList => {
                    //         console.log(' business list ' + businessList);
                    //         if(!businessList){
                    //             reject('Error inserting record to business_details');
                    //         }
                    //         else{
                    //             let business_id = businessList[0].business_id;
                    //             resolve(business_id);
                    //         }
                    //     })
                    resolve(business_id);
                })
                    .catch((err) => { console.log('Error inserting record to business_details'); reject(err); });
            });
        });
    }
}
module.exports = BusinessService;
