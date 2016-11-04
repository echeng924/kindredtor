import React, { Component } from 'react';
import request from 'superagent';
import NavBarLoggedIn from './Nav/NavBarLoggedIn.jsx';
import NavBarLoggedOut from './Nav/NavBarLoggedOut.jsx';
// import Initial from '/Home/Initial.jsx';

class App extends Component {
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
    let navElements;
    if(this.state.profile) {
      navElements = (
        <div>
          <NavBarLoggedIn />
        </div>
      );
    } else {
      navElements = (
        <div>
          <NavBarLoggedOut />
        </div>
      );
    }
    return (
      <div>
        <span id='nav'>
          { navElements }
        </span>
        From app.
        {this.props.children}
      </div>
    );
  }
}

export default App;


//add updateAuth within here, but maybe change to check for token session?
