require('dotenv').config();

module.exports = {
  secret: process.env.SECRET_KEY,
  expiresIn: process.env.EXPIRES_IN,
};