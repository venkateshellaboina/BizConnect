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
class CustomerService {
    constructor(event, db) {
        this.event = event;
        this.db = db;
    }
    getCustomerDetails(user_email) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                this.db('customer')
                    .where('user_email', user_email)
                    .then(customers => {
                    const customer = customers[0];
                    if (!customer) {
                        reject('User not found');
                    }
                    resolve(customer);
                });
            });
        });
    }
}
module.exports = CustomerService;
