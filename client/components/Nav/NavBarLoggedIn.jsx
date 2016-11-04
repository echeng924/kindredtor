import React, { Component } from 'react';
import { Link, withRouter } from 'react-router';
import request from 'superagent';

class NavBarLoggedIn extends Component {
  constructor() {
    super();
    this.signOut = this.signOut.bind(this);
  }
  signOut() {
    request.post('/auth/signout')
           .then(() => this.updateAuth());
  }
  render() {
    return (
      <span className="navBar">
        <li><Link to='/' id="Home">Home</Link></li>
        <li><Link to='/dashboard' id="Dashboard">Dashboard</Link></li>
        <li><Link to='/matches' id="myMatches">My Matches</Link></li>
        <li><Link to='/' onClick={this.signOut}>Sign Out</Link></li>
      </span>
    )
  }
}

export default NavBarLoggedIn;

//stateless component -- could change to function
    /* <span>
        <li><Link to='/' id="Home">Home</Link></li>
        <li><Link to='/about' id="About">About</Link></li>
        <li><Link to='/dashboard' id="Dashboard">Dashboard</Link></li>
        <li><Link to='/matches' id="myMatches">My Matches</Link></li>
        <li><Link to='/signout' id="signOut">Sign Out</Link></li>
      </span>
      */
