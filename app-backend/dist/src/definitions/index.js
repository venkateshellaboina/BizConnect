"use strict";
// export {};
const Customer = require("./customer.definition");
const User = require("./user.definition");
const Menu = require("./menu.definition");
const Root = require("./base.definition");
const schemaArray = [User, Menu, Customer, Root];
module.exports = schemaArray;
