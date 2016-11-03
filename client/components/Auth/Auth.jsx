import React, { Component } from 'react';
import { Link } from 'react-router';
import request from 'superagent';
import cookie from 'react-cookie';
import RegisterForm from './registerForm.jsx';
import LoginForm from './loginForm.jsx';

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
              this.updateAuth();
           })
  }
  signUp(memberDetails) {
    request.post('/auth/signup')
           .send(memberDetails)
           .then(() => {
              this.updateAuth()
           });
  }
  render() {
    let memberDisplayElement;
    if(this.state.profile) {
      memberDisplayElement = (
        <div>
          <p>You are logged in. {this.state.profile.blurb} <img src="/auth/picture"/></p>
          <button onClick={this.signOut}> Log Out! </button>
        </div>
      )
      } else {
        memberDisplayElement = (
          <div>
            <h3>Register or Login </h3>
            <RegisterForm handleSignUpSubmit={this.signUp}/>
            <LoginForm handleLoginSubmit={this.logIn} />
          </div>
        )
      }
      return (
        <div>
          {memberDisplayElement}

          <div>
            <button>
              <Link to='/'>
                Home
              </Link>
            </button>
          </div>
        </div>
      );
    }
  }

export default Auth;

