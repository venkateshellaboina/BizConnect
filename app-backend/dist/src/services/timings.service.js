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
const EmailService = require('./email.service');
class TimingsService extends BaseService {
    constructor(event, db) {
        super(event, db);
    }
    get(business_id) {
        return __awaiter(this, void 0, void 0, function* () {
            let result = yield this.db('timings').where('business_id', business_id);
            return result;
        });
    }
    addTimings(timings) {
        return __awaiter(this, void 0, void 0, function* () {
            let result = yield this.db('timings').insert(timings);
            return result[0];
        });
    }
    updateTimings(timings) {
        return __awaiter(this, void 0, void 0, function* () {
            let result;
            try {
                this.transaction = yield this.db.transaction();
                result = yield Promise.all(timings.map(timing => this.updateTiming(timing)));
                yield this.transaction.commit();
                // let emailService = new EmailService();
                // emailService.sendEmail();
            }
            catch (error) {
                console.log('error in transaction commit ' + error);
                this.transaction.rollback();
                return -1;
            }
            return result[0];
        });
    }
    updateTiming(timing) {
        return __awaiter(this, void 0, void 0, function* () {
            let timing_id = timing.id;
            delete timing.id;
            let result = yield this.transaction('timings').update(timing).where('id', timing_id);
            return timing_id;
        });
    }
}
module.exports = TimingsService;
