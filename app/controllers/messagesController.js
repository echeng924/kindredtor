const MessageDAO = require('../services/MessageDAO');

class MessageController {
  static getMessagesByGroup(req, res) {
    MessageDAO.getMessagesByGroup({id: req.params.id}).then((messages) => {
      res.status(200).json(messages);
    }).catch( (error) => {
              console.log(error);
              res.status(500).json(error);
             });
  }
  static getGroupsByUser(req, res) {
    MessageDAO.getGroupsByUser({id: req.params.id}).then((messages) => {
      res.status(200).json(messages);
    }).catch( (error) => {
              console.log(error);
              res.status(500).json(error);
             });
  }
}

module.exports = MessageController;
