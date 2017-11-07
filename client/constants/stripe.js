const STRIPE_PUBLISHABLE = process.env.NODE_ENV === 'production'
  ? PK_LIVE_STRIPE //Replace with Live key
  : 'pk_test_Vdaphjjy2tZY9I6WDfm5Bej9';

export default STRIPE_PUBLISHABLE;
