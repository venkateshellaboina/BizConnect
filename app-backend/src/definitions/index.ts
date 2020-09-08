export {};
const Customer = require("./customer.definition");
const User = require("./user.definition");
const Menu = require("./menu.definition");
const Root = require("./base.definition");
const Business_Category = require("./business_category.definition");


const schemaArray = [User, Menu, Customer, Root, Business_Category];

module.exports = schemaArray;


