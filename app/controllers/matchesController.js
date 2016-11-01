const MatchDAO = require('../services/MatchDAO.js');

class MatchesController {
  static getAllMatches(req, res) {
    MatchDAO.all().then((matches) => {
      res.status(200).json(matches);
    });
  }
  static getRandomMatch(req, res) {
    MatchDAO.findBy(req.params.id)
             .then((match) => {
                res.status(200).json(match);
             });
  }
  static create(req, res) {
    const matchData = {
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      interested_tech: req.body.interested_tech,
      match_id: req.body.match_id,
    };
    MatchDAO.create(matchData)
             .then((match) => res.status(200).json(match));
  }
  static delete(req, res) {
    MatchDAO.delete(req.params.id)
             .then(() => res.status(204).end());
  }
}

module.exports = MatchesController;
