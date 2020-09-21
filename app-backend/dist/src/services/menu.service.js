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
            let result = yield this.db('menu').insert(item);
            console.log('menu result : ' + result);
            let itemId = result[0];
            return itemId;
        });
    }
    addMenuCategory(category) {
        return __awaiter(this, void 0, void 0, function* () {
            let result = yield this.db('item_categories').insert(category);
            let categoryId = result[0];
            return categoryId;
        });
    }
    getAll(business_id) {
        return __awaiter(this, void 0, void 0, function* () {
            let menuList = yield this.db('menu').where('business_id', business_id);
            console.log('menu result : ' + JSON.stringify(menuList));
            return menuList;
        });
    }
    getMenuCategories(business_id) {
        return __awaiter(this, void 0, void 0, function* () {
            let menuCategoryList = yield this.db.select('*').from('item_categories').where('business_id', business_id);
            return menuCategoryList;
        });
    }
}
module.exports = MenuService;
