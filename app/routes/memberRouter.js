const express = require('express');
const MembersController = require('../controllers/membersController');

const router = express.Router();

router.get('/', MembersController.getOneMember);
router.get('/:id', MembersController.getMemberByMatch);
router.get('/:id/picture', MembersController.getProfilePic);
router.put('/:id', MembersController.update);
router.delete('/:id', MembersController.delete);

module.exports = router;
