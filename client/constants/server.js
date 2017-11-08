const PAYMENT_SERVER_URL = process.env.NODE_ENV === 'production'
  ? 'https://warm-spire-59777.herokuapp.com/api/stripe' //Replace with Heroku
  : 'http://localhost:8080/api/stripe';

export default PAYMENT_SERVER_URL;
