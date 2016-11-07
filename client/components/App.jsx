import React, { Component } from 'react';
import request from 'superagent';
import NavBarLoggedOut from './Nav/NavBarLoggedOut.jsx';
// import Initial from '/Home/Initial.jsx';

class App extends Component {
  constructor() {
    super();
    this.state = {
      profile: null,
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
            if (this.refs[0].profileUpdated) {
              this.refs[0].profileUpdated();
            }
           }).catch(() => {
            this.setState({
              profile: null,
            });
            if (this.refs[0].profileUpdated) {
              this.refs[0].profileUpdated();
            }
           });
  }
  render() {
    let parent = this;
    // pass props to this.props.children
    this.children = React.Children.map(this.props.children, (child, idx) => {
      return React.cloneElement(child, {
        ref: idx,
        profile: parent.state.profile,
        updateAuth: parent.updateAuth,
      });
    });
    return (
      <div>
        <div id="nav">
          <NavBarLoggedOut profile={this.state.profile} updateAuth={this.updateAuth} router={this.props.router} path={this.props.location.pathname} />
        </div>
        <div>
          {this.children}
        </div>
      </div>
    );
  }
}

export default App;


// add updateAuth within here, but maybe change to check for token session?
