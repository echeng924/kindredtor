import React, { Component } from 'react';
import request from 'superagent';

class Profile extends Component {
  constructor() {
    super();
    this.state = {
      profile: [],
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
  render() {
    return (
      <div>
        Will render profile.
      </div>
    )
  }
}

export default Profile;
