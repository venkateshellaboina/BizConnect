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
const menuResolver = {
    Query: {
        getMenuItems: (root, args, { MenuService }) => __awaiter(void 0, void 0, void 0, function* () { return MenuService.getAll(args.business_id); }),
        getMenuCategories: (root, args, { MenuService }) => __awaiter(void 0, void 0, void 0, function* () { return MenuService.getMenuCategories(args.business_id); })
    },
    Mutation: {
        addMenuItem: (root, args, { MenuService }) => __awaiter(void 0, void 0, void 0, function* () { return MenuService.add(args.item); }),
        addMenuCategory: (root, { category }, MenuService) => __awaiter(void 0, void 0, void 0, function* () { return MenuService.addMenuCategory(category); })
    }
};
module.exports = menuResolver;
