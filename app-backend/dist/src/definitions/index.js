"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Customer = require("./customer.definition");
const User = require("./user.definition");
const Menu = require("./menu.definition");
const Root = require("./base.definition");
const Business_Category = require("./business_category.definition");
const Business = require("./business.definition");
const Customer_Subscriptions = require("./customer_subscriptions.definition");
const Location = require("./location.definition");
const Offer = require("./offer.definition");
const Rating = require("./rating.definition");
const Service = require("./service.definition");
const Timings = require("./timings.definition");
const Vacancy = require("./vacancy.definition");
const schemaArray = [User, Menu, Customer, Root, Business_Category, Business, Customer_Subscriptions, Location, Offer, Service, Rating,
    Timings, Vacancy];
module.exports = schemaArray;
