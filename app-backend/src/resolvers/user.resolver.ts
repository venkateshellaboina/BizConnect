export {}

const userResolver = {
    Query: {
        getUser: async (root, args, {UserService}) => UserService.getUser(args.user_email)
    },
    Mutation: {
        addUser: async (root, args, {UserService}) => UserService.addUser(args.user),
        updateUser: async (root, args, {UserService}) => UserService.updateUser(args.user)
    }
}
module.exports = userResolver;