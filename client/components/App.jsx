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
    this.updateAuth = this.updateAuth.bind(this);
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
          <NavBarLoggedIn updateAuth={this.updateAuth} router={this.props.router} />
        </div>
      );
    } else {
      navElements = (
        <div>
          <NavBarLoggedOut />
        </div>
      );
    }
    let parent = this;
    // pass props to this.props.children
    const children = React.Children.map(this.props.children, function (child) {
      return React.cloneElement(child, {
        profile: parent.state.profile,
        updateAuth: parent.updateAuth,
      });
    });
    return (
      <div>
        <div id="nav">
          { navElements }
        </div>
        <div>
          {children}
        </div>
      </div>
    );
  }
}

export default App;


// add updateAuth within here, but maybe change to check for token session?
