"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { ApolloServer } = require('apollo-server-lambda');
// const DatabaseService = require("./knex/knexfile");
const db = require("./knex/knexfile");
var _ = require("lodash");
//services
const UserService = require("./services/user.service");
const CustomerService = require("./services/customer.service");
const BusinessService = require("./services/business.service");
const LocationService = require("./services/location.service");
const TimingsService = require("./services/timings.service");
const MenuService = require("./services/menu.service");
const SubscriptionService = require("./services/subscription.service");
const RatingService = require("./services/rating.service");
const OfferService = require("./services/offer.service");
const VacancyService = require("./services/vacancy.service");
const ServicesService = require("./services/services.service");
//typedefs
const schemas = require("./definitions");
const inputs = require("./inputs");
const typeDefs = schemas.concat(inputs);
//resolvers
const resolvers = require("./resolvers");
const server = new ApolloServer({
    typeDefs: typeDefs,
    resolvers: resolvers,
});
module.exports.graphqlHandler = (event, context, callback) => {
    context.callbackWaitsForEmptyEventLoop = false;
    // let databaseService = new DatabaseService();
    // databaseService.init(); // initialise db instance
    // let db = databaseService.getInstance();
    // console.log('db : ' + db);
    let serverContext = {
        UserService: new UserService(event, db),
        CustomerService: new CustomerService(event, db),
        BusinessService: new BusinessService(event, db),
        LocationService: new LocationService(event, db),
        TimingsService: new TimingsService(event, db),
        MenuService: new MenuService(event, db),
        SubscriptionService: new SubscriptionService(event, db),
        RatingService: new RatingService(event, db),
        OfferService: new OfferService(event, db),
        VacancyService: new VacancyService(event, db),
        ServicesService: new ServicesService(event, db)
    };
    server.context = serverContext;
    function callbackFilter(error, output) {
        if (!output.headers) {
            output.headers = {};
        }
        // output.headers['Access-Control-Allow-Origin'] = '*';
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
