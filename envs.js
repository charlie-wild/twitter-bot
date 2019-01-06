const Twit = require('twit');

const T = new Twit({
  consumer_key: process.env.consumer_key,
  consumer_secret: process.env.consumer_secret,
  access_token: TEST,
  access_token_secret: TEST
});

module.exports = T;