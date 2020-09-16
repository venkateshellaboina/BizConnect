export {}

const serviceResolver = {
    Query: {
        getAllServices: async (root, args, {ServicesService}) => ServicesService.getAllServices(args.business_id)
    },
    Mutation: {
        addService: async (root, {service}, {ServicesService}) => ServicesService.addService(service),
        updateService: async (root, {service}, {ServicesService}) => ServicesService.updateService(service),

    }
}
module.exports = serviceResolver;