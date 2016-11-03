const db = require('../config/db');
const sql = require('../config/sqlProvider.js').matches;
const Match = require('../models/Match');

class MatchDAO {
  static all() {
    return db.map(sql.all, [mentor_id], row => new Match(row));
  }
  static findBy(keyValue) {
    const key = Object.keys(keyValue)[0];
    const value = keyValue[key];
    return db.one(sql.find, [key, value], row => new Match(row));
  }
  static create({ mentor_id, mentee_id }) {
    return db.one(sql.create, [mentor_id, mentee_id], row => new Match(row))
             .catch((err) => console.log('error', err));
  }
  static delete(id) {
    return db.none(sql.delete, [id]);
  }
}

module.exports = MatchDAO;
