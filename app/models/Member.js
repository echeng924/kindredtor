class Member {
  constructor({ id, email, password, first_name, last_name, current_title, role, current_industry, interested_in, blurb, picture }) {
    this.id = id;
    this.email = email;
    this.password = password;
    this.first_name = first_name;
    this.last_name = last_name;
    this.current_title = current_title;
    this.role = role;
    this.current_industry = current_industry;
    this.interested_in = interested_in;
    this.blurb = blurb;
    this.picture = picture;
  }
}

module.exports = Member;
