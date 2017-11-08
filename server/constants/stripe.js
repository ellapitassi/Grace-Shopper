const configureStripe = require('stripe');
const { PK_TEST_SECRET_STRIPE } = require('../../secrets.js');
const { PK_LIVE_SECRET_STRIPE } = require('../../secrets.js');

const STRIPE_SECRET_KEY = process.env.NODE_ENV === 'production'
  ? PK_LIVE_SECRET_STRIPE 
  : PK_TEST_SECRET_STRIPE;

const stripe = configureStripe(STRIPE_SECRET_KEY);

module.exports = stripe;
