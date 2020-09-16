
const timingsResolver = {
    Query:{
        // getMenuItems: async(root, args, {MenuService}) => MenuService.getAll(args.business_id)
    },
    Mutation:{
        addTimings : async(root, {timings}, {TimingsService}) => TimingsService.addTimings(timings),
        updateTimings : async(root, {timings}, {TimingsService}) => TimingsService.updateTimings(timings)

    }
}

module.exports = timingsResolver;