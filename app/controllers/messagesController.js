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
  static createMessage(req, res) {
    MessageDAO.createMessage({
        group_id: req.body.group_id,
        sender_id: req.body.sender_id,
        text: req.body.text,
      }).then((messages) => {
      res.status(200).json(messages);
    }).catch( (error) => {
              console.log(error);
              res.status(500).json(error);
             });
  }
}

module.exports = MessageController;
