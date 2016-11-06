class Message {
  constructor({ first_name, last_name, sender_id, text }) {
    this.first_name = first_name;
    this.last_name = last_name;
    this.sender_id = sender_id;
    this.text = text;
  }
}

module.exports = Message;
