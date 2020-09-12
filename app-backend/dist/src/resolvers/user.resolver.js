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
const userResolver = {
    Query: {
        getUser: (root, args, { UserService }) => __awaiter(void 0, void 0, void 0, function* () { return UserService.getUser(args.user_email); })
    },
    Mutation: {
        addUser: (root, args, { UserService }) => __awaiter(void 0, void 0, void 0, function* () { return UserService.addUser(args.user); }),
        updateUser: (root, args, { UserService }) => __awaiter(void 0, void 0, void 0, function* () { return UserService.updateUser(args.user); })
    }
};
module.exports = userResolver;
