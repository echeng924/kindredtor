import React, { Component } from 'react';
import request from 'superagent';

class Messages extends Component {
  constructor() {
    super();
    this.state = {
      groups: [],
      messages: [],
      message: '',
      selected_group: null,
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleMessageSubmit = this.handleMessageSubmit.bind(this);
  }
  componentDidMount() {
    if (this.props.profile && this.props.profile.id)
      this.profileUpdated();
  }
  profileUpdated() {
    this.getGroups();
  }
  getGroups() {
    request.get(`/api/messages/user/${this.props.profile.id}`)
           .then((groups) => {
              this.setState({ groups: groups.body });
           })
  }

  selectGroup(group) {
    console.log(group);
    request.get(`/api/messages/group/${group.group_id}`)
           .then((messages) => {
              this.setState({
                selected_group: group,
                messages: messages.body,
              });
           });
  }
  handleInputChange(e) {
    console.log("handleInputChange");
    const target = e.target;
    const name = target.getAttribute('name');
    const value = target.value;
    const messages = {};
    messages[name] = value;
    this.setState(messages);
  }

  handleMessageSubmit(e) {
    e.preventDefault();
    request.put(`/api/messages/group/${this.state.selected_group.group_id}`)
           .send({
                group_id: this.state.selected_group.group_id,
                sender_id: this.props.profile.id,
                text: this.state.message,
           }).then(() => {
              this.selectGroup(this.state.selected_group);
           });
  }
  render() {
    const groupList = this.state.groups.map((group, idx) => {
        return (
          <div className="profile" key={idx} onClick={this.selectGroup.bind(this, group)}>
            <div className="image"><img src={`/api/members/${group.member_id}/picture`}/></div>
            <div className="details">
              <div>Chat with {group.first_name} {group.last_name}</div>
            </div>
          </div>
        );
      });
    const messageList = this.state.messages.map((message, idx) => {
        return (
          <div className="message" key={idx}>
            {message.first_name} {message.last_name}: {message.text}
          </div>
        );
      });
    let messages;
    if (this.state.selected_group) {
      messages = (<div>
                <div className="title">Chatting with {this.state.selected_group.first_name} {this.state.selected_group.last_name}</div>
                <div className="messages">{ messageList }</div>
                <div>
                  <textarea
                    name="message"
                    value={this.state.message}
                    onChange={this.handleInputChange}
                  />
                  <input
                    type="submit"
                    onClick={this.handleMessageSubmit}
                  />
                </div>
              </div>);
    } else {
      messages = (<div>
          <div className="noMessages">Select a group on the left to get started</div>
        </div>);
    }
    return (
      <div className="messagePage">
        <div className="groupList">{ groupList }</div>
        <div className="messageList">
          {messages}
        </div>
      </div>
    );
  }
}

export default Messages;

