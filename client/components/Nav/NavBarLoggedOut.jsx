import React, { Component } from 'react';
import { Link, withRouter } from 'react-router';

class NavBarLoggedOut extends Component {
  render() {
    return (
      <span className="navBar">
        <li><Link to='/' id="Home">Home</Link></li>
        <li><Link to='/dashboard' id="Dashboard">Dashboard</Link></li>
        <li><Link to='/register' id="register">Get Started</Link></li>
      </span>
    );
  }
}

export default NavBarLoggedOut;

//stateless component -- could change to function
    /*
      <span>
        <li><Link to='/' id="Home">Home</Link></li>
        <li><Link to='/dashboard' id="Dashboard">Dashboard</Link></li>
        <li><Link to='/details' id="details">How it works</Link></li>
        <li><Link to='/register' id="register">Get Started</Link></li>
        --brings you to Auth
      </span>
      */
