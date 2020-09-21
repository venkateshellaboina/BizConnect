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
class UserService extends BaseService {
    constructor(event, db) {
        super(event, db);
    }
    getUser(user_email, CustomerService, BusinessService) {
        return __awaiter(this, void 0, void 0, function* () {
            let result = yield this.db('user').where('user_email', user_email);
            let user = result[0];
            if (user.type == 'customer') {
                let customer = yield CustomerService.getCustomerByEmail(user.user_email);
                user.id = customer.customer_id;
            }
            else if (user.type == 'business') {
                let business = yield BusinessService.getBusinessByEmail(user.user_email);
                user.id = business.business_id;
            }
            return user;
        });
    }
    addUser(user, CustomerService) {
        return __awaiter(this, void 0, void 0, function* () {
            let result = yield this.db('user').insert(user);
            if (user.type == 'customer') {
                let customer = {};
                customer.first_name = user.first_name;
                customer.last_name = user.last_name;
                customer.contact_no = user.contact_no;
                customer.user_email = user.user_email;
                console.log('add customer : ' + JSON.stringify(customer));
                let result = yield CustomerService.addCustomerDetails(customer);
                console.log('add customer id : ' + result);
            }
            return user.user_email;
        });
    }
    updateUser(user) {
        return __awaiter(this, void 0, void 0, function* () {
            let user_email = user.user_email;
            delete user.user_email;
            let result = yield this.db('user').update(user).where('user_email', user_email);
            return user_email;
        });
    }
}
module.exports = UserService;
