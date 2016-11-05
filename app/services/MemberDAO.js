const db = require('../config/db');
const sql = require('../config/sqlProvider.js').members;
const Member = require('../models/Member');

class MemberDAO {
  static all() {
    return db.map(sql.all, [], row => new Member(row));
  }
  static findBy({ interested_tech, role }) {
    return db.one(sql.find, [interested_tech, role], row => new Member(row));
  }
  static findByEmail({ email }) {
    return db.one(sql.findEmail, [email], row => new Member(row));
  }
  static create({ email, password, first_name, last_name, current_title, role, current_industry, interested_tech, blurb, picture }) {
    return db.one(sql.create, [email, password, first_name, last_name, current_title, role, current_industry, interested_tech, blurb, picture], row => new Member(row))
             .catch((err) => console.log('error', err));
  }
  static delete(id) {
    return db.none(sql.delete, [id]);
  }
  static update({ first_name, last_name, current_title, role, current_industry, interested_tech, blurb, picture, id }) {
    console.log(id);
    return db.none(sql.update, [first_name, last_name, current_title, role, current_industry, interested_tech, blurb, picture, id]);
  }
  static updateNoPicture({ first_name, last_name, current_title, role, current_industry, interested_tech, blurb, id }) {
    console.log(id);
    console.log("no picture");
    return db.none(sql.updateNoPicture, [first_name, last_name, current_title, role, current_industry, interested_tech, blurb, id]);
  }
}

module.exports = MemberDAO;
