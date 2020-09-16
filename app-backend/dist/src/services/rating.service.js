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
const BaseService = require("./base.service");
class RatingService extends BaseService {
    constructor(event, db) {
        super(event, db);
    }
    addRating(rating) {
        return __awaiter(this, void 0, void 0, function* () {
            let result = yield this.db('ratings').insert(rating);
            let rating_id = result[0];
            return rating_id;
        });
    }
    updateRating(rating) {
        return __awaiter(this, void 0, void 0, function* () {
            let rating_id = rating.id;
            delete rating.id;
            let result = yield this.db('ratings').update(rating).where('id', rating_id);
            return result[0];
        });
    }
    getAllRatings(business_id) {
        return __awaiter(this, void 0, void 0, function* () {
            let ratings = yield this.db.select('*').from('ratings').leftOuterJoin('customer', { 'ratings.customer_id': 'customer.customer_id' }).where('ratings.business_id', business_id)
                .union([
                this.db.select('*').from('ratings').rightJoin('customer', { 'ratings.customer_id': 'customer.customer_id' }).where('ratings.business_id', business_id)
            ]);
            console.log('ratings list ' + ratings);
            return ratings;
        });
    }
}
module.exports = RatingService;
