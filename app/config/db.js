if(!process.env.DATABASE_URL) {
  require('dotenv').config();
}

const pgp = require('pg-promise')({
  query: function (e) {
    console.log(e.query, e.params);
  },
  error: function (err, e) {
    console.log(err);
  },
});

const connectionURL = process.env.DATABASE_URL;

const db = pgp(connectionURL);

module.exports = db;
