"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("lodash");
//resolvers
const userResolver = require("./user.resolver");
const customerResolver = require("./customer.resolver");
const businessResolver = require("./business.resolver");
const menuResolver = require("./menu.resolver");
const customerSubscriptionResolver = require("./customer_subscription.resolver");
const resolvers = _.merge(userResolver, customerResolver, businessResolver, menuResolver, customerSubscriptionResolver);
module.exports = resolvers;
