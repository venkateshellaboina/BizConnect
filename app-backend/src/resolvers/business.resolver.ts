export {}

const businessResolver = {
    Query:{
        getBusinessDetails : async (root, args, {BusinessService}) => BusinessService.getBusinessDetails(args.email)
    },
    Business:{
        location: async (business, args, {LocationService}) => LocationService.getLocation(business.location_id),
        timings: async (business, args, {TimingsService}) => TimingsService.get(business.business_id)
    }
}

module.exports = businessResolver;