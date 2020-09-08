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
const businessResolver = {
    Query: {
        getBusinessDetails: (root, args, { BusinessService }) => __awaiter(void 0, void 0, void 0, function* () { return BusinessService.getBusinessDetails(args.email); })
    },
    Business: {
        location: (business, args, { LocationService }) => __awaiter(void 0, void 0, void 0, function* () { return LocationService.getLocation(business.location_id); }),
        timings: (business, args, { TimingsService }) => __awaiter(void 0, void 0, void 0, function* () { return TimingsService.get(business.business_id); })
    }
};
module.exports = businessResolver;
