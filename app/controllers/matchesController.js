const MatchDAO = require('../services/MatchDAO.js');

class MatchesController {
  static getAllMatches(req, res) {
    MatchDAO.all({id: req.params.id}).then((matches) => {
      res.status(200).json(matches);
    }).catch( (error) => {
              console.log(error);
              res.status(500).json(error);
             });
  }
  static getOneMatch(req, res) {
    MatchDAO.findBy(req.params.id)
             .then((match) => {
                res.status(200).json(match);
             }).catch( (error) => {
              console.log(error);
              res.status(500).json(error);
             });
  }
  static create(req, res) {
    const matchData = {
      member_id1: req.body.member_id1,
      member_id2: req.body.member_id2,
    };
    console.log("create:", matchData);
    MatchDAO.create(matchData)
             .then((match) => res.status(200).json(match)).catch( (error) => {
              console.log(error);
              res.status(500).json(error);
             });
  }
  static delete(req, res) {
    MatchDAO.delete(req.params.id)
             .then(() => res.status(204).end()).catch( (error) => {
              console.log(error);
              res.status(500).json(error);
             });
  }
}

module.exports = MatchesController;
