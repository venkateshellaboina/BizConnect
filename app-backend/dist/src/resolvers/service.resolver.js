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
const serviceResolver = {
    Query: {
        getAllServices: (root, args, { ServicesService }) => __awaiter(void 0, void 0, void 0, function* () { return ServicesService.getAllServices(args.business_id); })
    },
    Mutation: {
        addService: (root, { service }, { ServicesService }) => __awaiter(void 0, void 0, void 0, function* () { return ServicesService.addService(service); }),
        updateService: (root, { service }, { ServicesService }) => __awaiter(void 0, void 0, void 0, function* () { return ServicesService.updateService(service); }),
    }
};
module.exports = serviceResolver;
