export{};

const { ApolloServer } = require('apollo-server-lambda');
const db = require("./knex/knexfile");
var  _ = require("lodash");
//services
const UserService = require("./services/user.service");
const CustomerService = require("./services/customer.service");
const BusinessService = require("./services/business.service");
const LocationService = require("./services/location.service");
const TimingsService = require("./services/timings.service");
//typedefs
const schemas = require("./definitions");
const inputs = require("./inputs");
const typeDefs = schemas.concat(inputs);
//resolvers
const resolvers = require("./resolvers");


const server = new ApolloServer({
  typeDefs : typeDefs,
  resolvers : resolvers,
});
 
module.exports.graphqlHandler = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;
  let serverContext:any = {
    UserService : new UserService(event, db),
    CustomerService : new CustomerService(event, db),
    BusinessService : new BusinessService(event, db),
    LocationService : new LocationService(event, db),
    TimingsService : new TimingsService(event, db)
  }
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