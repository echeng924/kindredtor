const express = require('express');
const MembersController = require('../controllers/MembersController');

const router = express.Router();

router.get('/', MembersController.getOneMember);
router.get('/:id', MembersController.getMemberByMatch);
router.put('/:id', MembersController.update);
router.delete('/:id', MembersController.delete);

module.exports = router;
