export {}

const businessResolver = {
    Query:{
        getBusinessDetails : async (root, args, {BusinessService}) => BusinessService.getBusinessDetails(args.business_id),
        // getBusinessMenuList: async (root, args, {MenuService}) => MenuService.get(args.email)
    },
    Business:{
        location: async (business, args, {LocationService}) => LocationService.getLocation(business.location_id),
        timings: async (business, args, {TimingsService}) =>{
            const timings: any = await TimingsService.get(business.business_id);
            return timings;
        } 
    },
    Mutation:{
        addBusinessDetails: async (root, args, {BusinessService, LocationService}) => BusinessService.addBusinessDetails(args.business, LocationService)
    }
}

module.exports = businessResolver;