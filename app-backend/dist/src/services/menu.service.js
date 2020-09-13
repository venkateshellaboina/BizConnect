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
class MenuService extends BaseService {
    constructor(event, db) {
        super(event, db);
    }
    add(item) {
        return __awaiter(this, void 0, void 0, function* () {
            let itemId = yield this.db('menu')
                .insert(item)
                .then(result => result[0]);
            return itemId;
        });
    }
    getAll(business_id) {
        return __awaiter(this, void 0, void 0, function* () {
            let menuList = yield this.db('menu')
                .where('business_id', business_id)
                .then(result => {
                console.log(' All items', result);
                return (result);
            });
            return menuList;
        });
    }
}
module.exports = MenuService;
