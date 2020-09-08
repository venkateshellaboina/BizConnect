"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeDefs = require("./definitions");
const { ApolloServer } = require('apollo-server-lambda');
const db = require("./knex/knexfile");
var _ = require("lodash");
//services
const UserService = require("./services/user.service");
const CustomerService = require("./services/customer.service");
const BusinessService = require("./services/business.service");
const LocationService = require("./services/location.service");
const TimingsService = require("./services/timings.service");
//resolvers
const userResolver = require("./resolvers/user.resolver");
const customerResolver = require("./resolvers/customer.resolver");
const businessResolver = require("./resolvers/business.resolver");
// const locationResolver = require("./resolvers/location.resolver");
const server = new ApolloServer({
    typeDefs: typeDefs,
    resolvers: _.merge(userResolver, customerResolver, businessResolver),
});
module.exports.graphqlHandler = (event, context, callback) => {
    context.callbackWaitsForEmptyEventLoop = false;
    let serverContext = {
        UserService: new UserService(event, db),
        CustomerService: new CustomerService(event, db),
        BusinessService: new BusinessService(event, db),
        LocationService: new LocationService(event, db),
        TimingsService: new TimingsService(event, db)
    };
    server.context = serverContext;
    function callbackFilter(error, output) {
        if (!output.headers) {
            output.headers = {};
        }
        output.headers['Access-Control-Allow-Origin'] = '*';
        callback(error, output);
    }
    const graphqlHandler = server.createHandler({
        cors: {
            origin: "*",
            credentials: true,
        },
    });
    graphqlHandler(event, context, callbackFilter);
};
