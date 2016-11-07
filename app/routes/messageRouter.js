const express = require('express');
const MessagesController = require('../controllers/messagesController');

const router = express.Router();

router.get('/group/:id', MessagesController.getMessagesByGroup);
router.get('/user/:id', MessagesController.getGroupsByUser);
router.put('/group/:id', MessagesController.createMessage);

module.exports = router;
