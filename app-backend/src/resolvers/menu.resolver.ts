
const menuResolver = {
    Query:{
        getMenuItems: async(root, args, {MenuService}) => MenuService.getAll(args.business_id)
    },
    Mutation:{
        addMenuItem : async(root, args, {MenuService}) => MenuService.add(args.item)
    }
}

module.exports = menuResolver;