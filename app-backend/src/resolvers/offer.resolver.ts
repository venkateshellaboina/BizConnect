
const offerResolver = {
    Query:{
        getAllOffers: async(root, args, {OfferService}) => OfferService.getAllOffers(args.business_id)
    },
    Mutation:{
        addOffer: async (root, args, {OfferService}) => OfferService.addOffer(args.offer),
        updateOffer: async (root, args, {OfferService}) => OfferService.updateOffer(args.offer),
    }
}

module.exports = offerResolver;