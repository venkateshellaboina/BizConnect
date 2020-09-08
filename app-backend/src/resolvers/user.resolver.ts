export {}

const userResolver = {
    Query: {
        getUserInfo: async (root, args, {UserService}) => UserService.getUserInfo(args.user_email)
    },
}
module.exports = userResolver;