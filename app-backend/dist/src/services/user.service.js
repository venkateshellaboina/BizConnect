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
    getUser(user_email) {
        return __awaiter(this, void 0, void 0, function* () {
            let result = yield this.db('user').where('user_email', user_email);
            let user = result[0];
            return user;
        });
    }
    addUser(user) {
        return __awaiter(this, void 0, void 0, function* () {
            let result = yield this.db('user').insert(user);
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
