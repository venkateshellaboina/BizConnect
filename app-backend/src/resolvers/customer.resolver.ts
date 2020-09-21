export {}

const customerResolver = {
    Query: {
        getCustomerDetails : async (root, args, {CustomerService}) => CustomerService.getCustomerDetails(args.customer_id),
    },
    Mutation:{
        addCustomerDetails: async (root, args, {CustomerService}) => CustomerService.addCustomerDetails(args.customer)
    }
}
module.exports = customerResolver;