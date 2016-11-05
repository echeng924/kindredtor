import React, { Component } from 'react';
import { Link, withRouter } from 'react-router';
import request from 'superagent';
import cookie from 'react-cookie';
import RegisterForm from './registerForm.jsx';
import LoginForm from './loginForm.jsx';
import NavBarLoggedIn from '../Nav/NavBarLoggedIn.jsx';
import NavBarLoggedOut from '../Nav/NavBarLoggedOut.jsx';
// import Dashboard from '../Dashboard/dashboard.jsx';

class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = { members: [] }
    this.logIn = this.logIn.bind(this);
    this.signUp = this.signUp.bind(this);
    this.signOut = this.signOut.bind(this);
  }
  componentDidMount() {
    this.updateAuth();
    if(this.state.profile)
      this.props.router.push('/profile');
  }
  signOut() {
    request.post('/auth/signout')
           .then(() => this.updateAuth());
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
    /*this.setState({
      token: cookie.load('token'),
    });*/
  }
  logIn(memberDetails) {
    request.post('/auth/login')
           .send(memberDetails)
           .then(() => {
              this.props.router.push('/profile');
           })
  }
  signUp(memberDetails) {
    request.post('/auth/signup')
           .send(memberDetails)
           .then(() => {
              this.updateAuth();
           });
  }
  render() {
    let memberDisplayElement;
    if(!this.state.profile) {
        // this.props.router.push('/register');
        memberDisplayElement = (
          <div id="formContainer">
            <RegisterForm handleSignUpSubmit={this.signUp} />
            <LoginForm handleLoginSubmit={this.logIn} />
          </div>
        );
      }
      return (
        <div>
          {memberDisplayElement}

        </div>
      );
    }
  }

export default Auth;

/*            <div>
              <NavBarLoggedOut />
            </div>
                      <div>
            <NavBarLoggedIn onClick={this.signOut} />
          </div>



      memberDisplayElement = (
        <div>
          <div>
            <p>You are logged in.</p>
            <h3>Current Profile: </h3>
            <p>{this.state.profile.blurb}</p>
            <p>You are logged in. {this.state.profile.blurb} <img width="200" src="/auth/picture"/></p>
          </div>
        </div>
      );
*/
