import T from '../envs'
const stream = T.stream('user')
const sendGreeting = require('./controllers/sendGreeting')
const verifyCredentials = require('./controllers/verify')

verifyCredentials((err, res) => {
  if (err) throw err;
  const account_id = res.id_str;
  console.log('credentials verified - bot running');
    stream.on('follow' , (json) => {
    if(json.event === 'follow' && json.source.id_str !== account_id) {
      sendGreeting(json.source)
    }
  })
    stream.on('error', (error) => {
    throw error;
  })
})