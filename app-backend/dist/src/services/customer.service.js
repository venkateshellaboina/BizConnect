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
class CustomerService extends BaseService {
    constructor(event, db) {
        super(event, db);
    }
    getCustomerDetails(user_email) {
        return __awaiter(this, void 0, void 0, function* () {
            let customer = yield this.db('customer')
                .where('user_email', user_email)
                .then(customers => {
                const customer = customers[0];
                return customer;
            });
            return customer;
        });
    }
    addCustomerDetails(customer) {
        return __awaiter(this, void 0, void 0, function* () {
            let customer_id = yield this.db('customer')
                .insert(customer)
                .then(result => {
                console.log(' customer result ' + result);
                let customer_id = result[0];
                return customer_id;
            });
            return customer_id;
        });
    }
}
module.exports = CustomerService;
