const MemberDAO = require('../services/MemberDAO');
const createToke = require('../utils/createToken');
const bcrypt = require('bcrypt');

class AuthController {
  static login(req, res) {
    console.log('logging in auth');
    const { email, password } = req.body;
    MemberDAO.findBy({ email })
             .then((member) => {
                if(!bcrypt.compareSync(password, member.password)) {
                  res.status(401).end();
                } else {
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
    let location = req.body.location;
    let current_title = req.body.current_title;
    let role = req.body.role;
    let current_industry = req.body.current_industry;
    let interested_tech = req.body.interested_tech;
    let blurb = req.body.blurb;
    if (email.length > 0 && password.length > 0) {
      password = bcrypt.hashSync(password, 10);
      MemberDAO.create({ email, password, first_name, last_name, location, current_title, role, current_industry, interested_tech,blurb })
               .then((member) => {
                  req.session.currentMember = member;
                  const token = createToken(member);
                  res.cookie('token', token);
                  res.status(200).json(member)
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
}

module.exports = AuthController;

