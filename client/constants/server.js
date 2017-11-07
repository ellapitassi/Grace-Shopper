const PAYMENT_SERVER_URL = process.env.NODE_ENV === 'production'
  ? 'http://myapidomain.com' //Replace with Heroku
  : 'http://localhost:8080';

export default PAYMENT_SERVER_URL;
