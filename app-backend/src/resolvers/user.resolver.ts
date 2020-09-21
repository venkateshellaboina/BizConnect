export {}

const userResolver = {
    Query: {
        getUser: async (root, args, {UserService, CustomerService, BusinessService}) => UserService.getUser(args.user_email, CustomerService, BusinessService)
    },
    Mutation: {
        addUser: async (root, args, {UserService, CustomerService}) => UserService.addUser(args.user, CustomerService),
        updateUser: async (root, args, {UserService}) => UserService.updateUser(args.user)
    }
}
module.exports = userResolver;