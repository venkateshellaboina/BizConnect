export{};

const _ = require("lodash");

//resolvers
const userResolver = require("./user.resolver");
const customerResolver = require("./customer.resolver");
const businessResolver = require("./business.resolver");

const resolvers = _.merge( userResolver, customerResolver, businessResolver);

module.exports = resolvers;



