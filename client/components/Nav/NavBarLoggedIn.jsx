import React, { Component } from 'react';
import { Link, withRouter } from 'react-router';

class NavBarLoggedIn extends Component {
  render() {
    return (
      <span>
        <li><Link to='/' id="Home">Home</Link></li>
        <li><Link to='/dashboard' id="Dashboard">Dashboard</Link></li>
        <li><Link to='/matches' id="myMatches">My Matches</Link></li>
        <li><Link to='/signout' id="signOut">Sign Out</Link></li>
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
