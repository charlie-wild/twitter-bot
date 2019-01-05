import T from '../envs';
import greet from './message';

const sendGreeting = (user) => {
  T.post('direct_messages/new',
  {
    user_id: user.id_str,
    text: greet(user.name)
  },
  (err) => {
    if(err) {
      console.err(err);
    }
  }
  )
};

module.exports = sendGreeting;