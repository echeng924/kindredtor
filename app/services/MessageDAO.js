const db = require('../config/db');
const sql = require('../config/sqlProvider.js').messages;
const Group = require('../models/Group');
const Message = require('../models/Message');

class MessageDAO {
  static getMessagesByGroup({ id }) {
    return db.map(sql.getMessagesByGroup, [id], row => new Message(row));
  }
  static getGroupsByUser({ id }) {
    return db.map(sql.getGroupsByUser, [id], row => new Group(row));
  }
  static createMessage({ group_id, sender_id, text }) {
    return db.one(sql.createMessage, [group_id, sender_id, text], row => new Message(row));
  }
}

module.exports = MessageDAO;
