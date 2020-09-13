
const customerSubscriptionResolver = {
    Mutation:{
        addSubscription: async (root, args, {SubscriptionService}) => SubscriptionService.subscribe(args.subscribe_mapping),
        removeSubscription: async (root, args, {SubscriptionService}) => SubscriptionService.unsubscribe(args.unsubscribe_mapping)
    }
}

module.exports = customerSubscriptionResolver;