const T = require('../envs');
const greet = require('./message');

const sendGreeting = (user) => {
  T.post('direct_messages/new',
  {
    user_id: user.id_str,
    text: greet(user.name)
  },
  (err) => {
    if(err) {
      console.error('error in sendGreeting to user: %s %s %s', user.name, user.screen_name, user.id_str)
      console.error(err);
    }
  }
  )
};

module.exports = sendGreeting;