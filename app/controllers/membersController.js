const MemberDAO = require('../services/MemberDAO');

class MembersController {
  static getAllMembers(req, res) {
    MemberDAO.all().then((members) => {
      res.status(200).json(members);
    });
  }
  static getOneMember(req, res) {
    MemberDAO.findBy(req.params.interested_tech)
             .then((member) => {
                res.status(200).json(question);
             });
  }
  static create(req, res) {
    const memberData = {
      email: req.body.email,
      password: req.body.password,
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      location: req.body.location,
      current_title: req.body.current_title,
      role: req.body.role,
      current_industry: req.body.current_industry,
      interested_tech: req.body.interested_tech,
      blurb: req.body.blurb,
    };
    MemberDAO.create(memberData)
             .then((member) => res.status(200).json(member));
  }
  static update(req, res) {
    const updateData = {
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      location: req.body.location,
      current_title: req.body.current_title,
      role: req.body.role,
      current_industry: req.body.current_industry,
      interested_tech: req.body.interested_tech,
      blurb: req.body.blurb,
    };
    MemberDAO.update(updateData)
             .then(() => res.status(204).end());
  }
  static delete(req, res) {
    MemberDAO.delete(req.params.id)
             .then(() => res.status(204).end());
  }
}

module.exports = MembersController;
