export {}

const customerResolver = {
    Query: {
        getCustomerDetails : async (root, args, {CustomerService}) => CustomerService.getCustomerDetails(args.user_email)
    },
}
module.exports = customerResolver;