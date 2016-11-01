const jwt = require('jsonwebtoken');

function createToken(member) {
  return jwt.sign(member, process.env.JWT_SECRET, { expiresIn: 10080 });
}

module.exports = createToken;
