export {};
const BusinessInput = require('./business.input');
const UserInput = require('./user.input');
const LocationInput = require('./location.input');
const CustomerInput = require('./customer.input');
const MenuInput = require('./menu.input');
const SubscriptionInput = require('./customer_subscriptions.input');
const RatingInput = require('./rating.input');

const inputs = [BusinessInput, UserInput, LocationInput, CustomerInput, MenuInput, SubscriptionInput, RatingInput];

module.exports = inputs;