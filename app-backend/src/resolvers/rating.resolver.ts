
const ratingResolver = {
    Query:{
        getAllRatings: async(root, args, {RatingService}) => RatingService.getAllRatings(args.business_id)
    },
    Mutation:{
        addRating: async (root, args, {RatingService}) => RatingService.addRating(args.rating),
        updateRating: async (root, args, {RatingService}) => RatingService.addRating(args.rating)
    }
}

module.exports = ratingResolver;