const express = require('express');
const MatchesController = require('../controllers/MatchesController');

const router = express.Router();

router.get('/', MatchesController.getAllMatches);
router.post('/', MatchesController.create);
router.delete('/:id', MatchesController.delete);

module.exports = router;
