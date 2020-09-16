"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BusinessInput = require('./business.input');
const UserInput = require('./user.input');
const LocationInput = require('./location.input');
const CustomerInput = require('./customer.input');
const MenuInput = require('./menu.input');
const SubscriptionInput = require('./customer_subscriptions.input');
const RatingInput = require('./rating.input');
const OfferInput = require('./offer.input');
const VacancyInput = require('./vacancy.input');
const ServiceInput = require('./service.input');
const TimingsInput = require('./timings.input');
const inputs = [BusinessInput, UserInput, LocationInput, CustomerInput, MenuInput, SubscriptionInput,
    RatingInput, OfferInput, VacancyInput, ServiceInput, TimingsInput];
module.exports = inputs;
