const MemberDAO = require('../services/MemberDAO');
const createToken = require('../utils/createToken');
const bcrypt = require('bcrypt');

class AuthController {
  static login(req, res) {
    console.log('logging in auth');
    const { email, password } = req.body;
    MemberDAO.findByEmail({ email })
             .then((member) => {
                if(!bcrypt.compareSync(password, member.password)) {
                  res.status(401).end();
                } else {
                  member.picture = null;
                  req.session.currentMember = member;
                  const token = createToken(member);
                  res.cookie('token', token);
                  res.status(200).json(member);
                }
             })
             .catch((err) => {
                console.error(err);
                res.status(401).end();
             });
  }
  static signUp(req, res) {
    const email = req.body.email;
    let password = req.body.password;
    let first_name = req.body.first_name;
    let last_name = req.body.last_name;
    let current_title = req.body.current_title;
    let role = req.body.role;
    let current_industry = req.body.current_industry;
    let interested_tech = req.body.interested_tech;
    let blurb = req.body.blurb;
    let picture = req.body.picture;
    picture = new Buffer(picture.replace(/^data:image\/\w+;base64,/, ""), 'base64');
    //console.log(picture);
    if (email.length > 0 && password.length > 0) {
      password = bcrypt.hashSync(password, 10);
      MemberDAO.create({ email, password, first_name, last_name, current_title, role, current_industry, interested_tech, blurb, picture })
               .then((member) => {
                member.picture = null;
                  req.session.currentMember = member;
                  const token = createToken(member);
                  res.cookie('token', token);
                  res.status(200).json(member);
               })
               .catch((err) => res.status(500).json(err));
    } else {
      res.status(400).end();
    }
  }
  static signOut(req, res) {
    req.session.currentMember = null;
    res.clearCookie('token');
    res.status(204).end();
  }
  static profile(req, res) {
    console.log(req.session);
    res.status(200).json(req.session.currentMember);
  }

  static picture(req, res) {
    let email = req.session.currentMember.email;
    MemberDAO.findByEmail({ email })
             .then((member) => {
                  res.status(200).send(member.picture);
             })
             .catch((err) => {
                console.error(err);
                res.status(401).end();
             });
  }
}

module.exports = AuthController;

