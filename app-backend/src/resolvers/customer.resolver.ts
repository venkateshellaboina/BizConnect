export {}

const customerResolver = {
    Query: {
        getCustomerDetails : async (root, args, {CustomerService}) => CustomerService.getCustomerDetails(args.customer_id),
        getBusinessList: async (root, args, {BusinessService}) => BusinessService.getAll(args.category, args.searchKey)
    },
    Mutation:{
        addCustomerDetails: async (root, args, {CustomerService}) => CustomerService.addCustomerDetails(args.customer)
    }
}
module.exports = customerResolver;