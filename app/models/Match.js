class Match {
  constructor({ id, first_name, last_name, email, interested_tech, member_id}) {
    this.id = id;
    this.first_name = first_name;
    this.last_name = last_name;
    this.email = email;
    this.interested_tech = interested_tech;
    this.member_id = member_id;
  }
}

module.exports = Match;
