export {}

const businessResolver = {
    Query:{
        getBusinessDetails : async (root, args, {BusinessService}) => BusinessService.getBusinessDetails(args.business_id),
        getBusinessList: async (root, args, {BusinessService}) => BusinessService.getAll(args.category, args.searchKey),
        getBusinessCategories: async (root, args, {BusinessService}) => BusinessService.getBusinessCategories()

    },
    Business:{
        location: async (business, args, {LocationService}) => LocationService.getLocation(business.business_id),
        timings: async (business, args, {TimingsService}) => TimingsService.get(business.business_id),
        rating : async (business, args, {RatingService}) => RatingService.getAvgRating(business.business_id)
    },
    Mutation:{
        addBusinessDetails: async (root, args, {BusinessService, LocationService, TimingsService}) => BusinessService.addBusinessDetails(args.business, LocationService, TimingsService),
        updateBusinessDetails: async (root, args, {BusinessService, LocationService, TimingsService}) => BusinessService.updateBusinessDetails(args.business, LocationService, TimingsService)
    }
}

module.exports = businessResolver;