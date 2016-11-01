const db = require('../config/db');
const sql = require('../config/sqlProvider.js').members;
const Member = require('../models/Member');

class MemberDAO {
  static all() {
    return db.map(sql.all, [], row => new Member(row));
  }
  static findBy({ interested_tech, location }) {
    return db.one(sql.find, [interested_tech, location], row => new Member(row));
  }
  static create({ email, password, first_name, last_name, location, current_title, role, current_industry, interested_tech, blurb }) {
    return db.one(sql.create, [email, password, first_name, last_name, location, current_title, role, current_industry, interested_tech, blurb], row => new Member(row))
             .catch((err) => console.log('error', err));
  }
  static delete(id) {
    return db.none(sql.delete, [id]);
  }
  static update({ first_name, last_name, location, current_title, role, current_industry, interested_tech, blurb }) {
    return db.none(sql.update, [first_name, last_name, location, current_title, role, current_industry, interested_tech, blurb]);
  }
}

module.exports = MemberDAO;
