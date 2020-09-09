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
            return new Promise((resolve, reject) => {
                this.db('business_details')
                    .insert(business)
                    .then((result) => {
                    console.log('result ' + result);
                    resolve(result);
                })
                    .catch((err) => { console.log('Error inserting record to business_details'); reject(err); });
            });
        });
    }
}
module.exports = BusinessService;
