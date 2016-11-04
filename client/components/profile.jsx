import React, { Component } from 'react';
import request from 'superagent';

class Profile extends Component {
  constructor() {
    super();
    this.state = {
      profile: {},
      email: '',
      password: '',
      first_name: '',
      last_name: '',
      industry: '',
      interested_tech: '',
      blurb: '',
      picture: '',
      imagePreviewUrl: '',
    };
  }
  componentDidMount() {
    this.updateAuth();
  }
  updateAuth() {
    request.get('/auth/profile')
           .then((resp) => {
            this.setState({
              profile: resp.body,
            });
           }).catch(() => {
            this.setState({
              profile: null,
            });
           });
  }
  handleInputChange(e) {
    const target = e.target;
    const name = target.getAttribute('name');
    const value = target.value;
    const updated = {};
    updated[name] = value;
    this.setState(updated);
  }
  handleSubmit(e) {
    e.preventDefault();
    this.handleUpdatePost(this.state.profile);
  }
  handleUpdatePost(updateData) {
    request.put(`/members/:${this.state.profile.id}`)
           .send(updateData)
           .then(() => {
              console.log('update success');
           });
  }
  render() {
    return (
      <div id="profile">
        <p><img width="200" src="/auth/picture"/></p>
        <div className="registerForm">
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              name="first_name"
              placeholder="First Name"
              value={this.state.profile.first_name}
              onChange={this.handleInputChange}
            />
            <input
              type="text"
              name="last_name"
              placeholder="Last Name"
              value={this.state.profile.last_name}
              onChange={this.handleInputChange}
            />
            <input
              type="text"
              name="current_title"
              placeholder="Current Title"
              value={this.state.profile.current_title}
              onChange={this.handleInputChange}
            />
            <select name="industry" value={this.state.profile.industry} onChange={this.handleInputChange}>
              <option value="" disabled selected>Current Industry:</option>
              <option value="Biotechnology">Biotechnology</option>
              <option value="Education">Education</option>
              <option value="Energy">Energy</option>
              <option value="Film/Media">Film/Media</option>
              <option value="Fintech">Fintech</option>
              <option value="Food">Food</option>
              <option value="Medical">Medical</option>
              <option value="Military">Military</option>
              <option value="Music">Music</option>
              <option value="Sports">Sports</option>
              <option value="Travel">Travel</option>
            </select>
            <select name="role" value={this.state.profile.role} onChange={this.handleInputChange}>
              <option value="" disabled selected>Interested in being a:</option>
              <option value="Mentor">Mentor</option>
              <option value="Mentee">Mentee</option>
            </select>
            <select name="interested_tech" value={this.state.profile.interested_tech} onChange={this.handleInputChange}>
              <option value="" disabled selected>What is your primary technology:</option>
              <option value="SQL">SQL</option>
              <option value="Java">Java</option>
              <option value="JavaScript">JavaScript</option>
              <option value="C#">C#</option>
              <option value="Python">Python</option>
              <option value="C++">C++</option>
              <option value="PHP">PHP</option>
              <option value="ios">ios</option>
              <option value="Ruby/Rails">Ruby/Rails</option>
            </select>
            <textarea
              name="blurb"
              placeholder="Tell us about you..."
              value={this.state.profile.blurb}
              onChange={this.handleInputChange}
            />
            <input type="submit" value="Update Profle" />
          </form>
          <button>Go to matches</button>
        </div>
      </div>
    );
  }
}

export default Profile;
