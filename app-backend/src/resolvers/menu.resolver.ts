
const menuResolver = {
    Query:{
        getMenuItems: async(root, args, {MenuService}) => MenuService.getAll(args.business_id),
        getMenuCategories: async(root, args, {MenuService}) => MenuService.getMenuCategories(args.business_id)

    },
    Mutation:{
        addMenuItem : async(root, args, {MenuService}) => MenuService.add(args.item),
        addMenuCategory: async(root, {category}, MenuService) => MenuService.addMenuCategory(category)
    }
}

module.exports = menuResolver;