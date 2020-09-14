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
class SubscriptionService extends BaseService {
    constructor(event, db) {
        super(event, db);
    }
    subscribe(subscribe_mapping) {
        return __awaiter(this, void 0, void 0, function* () {
            let result = yield this.db('customer_subscription_mapping').insert(subscribe_mapping);
            return 'success';
        });
    }
    unsubscribe(unsubscribe_mapping) {
        return __awaiter(this, void 0, void 0, function* () {
            let result = yield this.db('customer_subscription_mapping')
                .where({ customer_id: unsubscribe_mapping.customer_id })
                .andWhere({ business_id: unsubscribe_mapping.business_id })
                .del();
            return 'success';
        });
    }
}
module.exports = SubscriptionService;
