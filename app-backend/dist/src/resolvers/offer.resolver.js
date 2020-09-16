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
const offerResolver = {
    Query: {
        getAllOffers: (root, args, { OfferService }) => __awaiter(void 0, void 0, void 0, function* () { return OfferService.getAllOffers(args.business_id); })
    },
    Mutation: {
        addOffer: (root, args, { OfferService }) => __awaiter(void 0, void 0, void 0, function* () { return OfferService.addOffer(args.offer); }),
        updateOffer: (root, args, { OfferService }) => __awaiter(void 0, void 0, void 0, function* () { return OfferService.updateOffer(args.offer); }),
    }
};
module.exports = offerResolver;
