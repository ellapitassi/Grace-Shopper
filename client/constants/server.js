const PAYMENT_SERVER_URL = process.env.NODE_ENV === 'production'
  ? 'https://teachables.herokuapp.com/api/stripe' //Replace with Heroku
  : 'http://localhost:8080/api/stripe';

export default PAYMENT_SERVER_URL;
