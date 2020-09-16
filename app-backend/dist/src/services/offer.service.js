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
class OfferService extends BaseService {
    constructor(event, db) {
        super(event, db);
    }
    ;
    addOffer(offer) {
        return __awaiter(this, void 0, void 0, function* () {
            let result = yield this.db('offer').insert(offer);
            let offer_id = result[0];
            return offer_id;
        });
    }
    updateOffer(offer) {
        return __awaiter(this, void 0, void 0, function* () {
            let offer_id = offer.offer_id;
            delete offer.offer_id;
            let result = yield this.db('offer').update(offer).where('offer_id', offer_id);
            return offer_id;
        });
    }
    getAllOffers(business_id) {
        return __awaiter(this, void 0, void 0, function* () {
            let offerList = yield this.db('offer').where('business_id', business_id);
            return offerList;
        });
    }
}
;
module.exports = OfferService;
