const MemberDAO = require('../services/MemberDAO');

class MembersController {
  static getAllMembers(req, res) {
    MemberDAO.all().then((members) => {
      res.status(200).json(members);
    }).catch( (error) => {
              console.log(error);
              res.status(500).json(error);
             });
  }
  static getOneMember(req, res) {
    console.log(req.query.interested_tech, req.query.role);
    MemberDAO.findBy({ interested_tech: req.query.interested_tech, role: req.query.role })
             .then((member) => {
                console.log(member);
                res.status(200).json(member);
             }).catch( (error) => {
              console.log(error);
              res.status(500).json(error);
             });
  }
  static create(req, res) {
    const memberData = {
      email: req.body.email,
      password: req.body.password,
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      current_title: req.body.current_title,
      role: req.body.role,
      current_industry: req.body.current_industry,
      interested_tech: req.body.interested_tech,
      blurb: req.body.blurb,
      picture: req.body.picture,
    };
    MemberDAO.create(memberData)
             .then((member) => res.status(200).json(member)).catch( (error) => {
              console.log(error);
              res.status(500).json(error);
             });
  }
  static update(req, res) {
    const updateData = {
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      current_title: req.body.current_title,
      current_industry: req.body.current_industry,
      role: req.body.role,
      interested_tech: req.body.interested_tech,
      blurb: req.body.blurb,
      picture: req.body.picture,
      id: req.body.id,
    };
    //console.log(updateData);
    const email = req.session.currentMember.email;
    if (!req.body.picture) {
      MemberDAO.updateNoPicture(updateData)
               .then(() => {
                req.session.currentMember = updateData;
                req.session.currentMember.email = email;
                res.status(204).end();
              }).catch( (error) => {
              console.log(error);
              res.status(500).json(error);
             });
    } else {
      updateData.picture = new Buffer(updateData.picture.replace(/^data:image\/\w+;base64,/, ""), 'base64');
      MemberDAO.update(updateData)
               .then(() => {
                updateData.picture = null;
                req.session.currentMember = updateData;
                req.session.currentMember.email = email;
                res.status(204).end();
              }).catch( (error) => {
              console.log(error);
              res.status(500).json(error);
             });
    }
  }
  static delete(req, res) {
    MemberDAO.delete(req.params.id)
             .then(() => res.status(204).end()).catch( (error) => {
              console.log(error);
              res.status(500).json(error);
             });
  }
}

module.exports = MembersController;
