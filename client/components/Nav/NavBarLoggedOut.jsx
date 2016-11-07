import React, { Component } from 'react';
import { Link, withRouter } from 'react-router';
import request from 'superagent';

class NavBarLoggedOut extends Component {
  constructor() {
    super();
    this.signOut = this.signOut.bind(this);
  }
  signOut() {
    request.post('/auth/signout')
           .then(() => {
              this.props.updateAuth();
              this.props.router.push('/');
            });
  }
  render() {
    let links;
    if(!this.props.profile) {
      return (
        <div className="navBar">
          <div className="navLeft">kindredtor</div>
          <div className="navRight">
            <li><Link to='/' id="Home" className={this.props.path=='/'?'active':''}>Home</Link></li>
            <li><Link to='/register' id="register" className={this.props.path=='/register'?'active':''}>Get Started</Link></li>
          </div>
        </div>
      );
    } else {
      return (
        <div className="navBar">
          <div className="navLeft">kindredtor</div>
          <div className="navRight">
            <li><Link to='/' id="Home" className={this.props.path=='/'?'active':''}>Home</Link></li>
            <li><Link to='/dashboard' id="Dashboard" className={this.props.path=='/dashboard'?'active':''}>Dashboard</Link></li>
            <li><Link to='/matches' id="myMatches" className={this.props.path=='/matches'?'active':''}>My Matches</Link></li>
            <li><Link to='/messages' id="messages" className={this.props.path=='/messages'?'active':''}>My Messages</Link></li>
            <li><Link to='/profile' id="profile" className={this.props.path=='/profile'?'active':''}>My Profile</Link></li>
            <li><Link to='/' onClick={this.signOut}>Sign Out</Link></li>
          </div>
        </div>
      );
    }
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
