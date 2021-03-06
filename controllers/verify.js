const T = require('../envs')


const verifyCredentials = (cb) => {
  T.get(
    'account/verify_credentials',
    {
      include_entities: false,
      skip_status: true,
      include_email: false
    },
    cb
  )
}

module.exports = verifyCredentials