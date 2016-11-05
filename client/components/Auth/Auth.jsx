import React, { Component } from 'react';
import { Link, withRouter } from 'react-router';
import request from 'superagent';
import cookie from 'react-cookie';
import RegisterForm from './registerForm.jsx';
import LoginForm from './loginForm.jsx';

class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = { members: [] };
    this.logIn = this.logIn.bind(this);
    this.signUp = this.signUp.bind(this);
  }
  componentDidMount() {
    if (this.props.profile) {
      this.props.router.push('/profile');
    }
  }
  logIn(memberDetails) {
    request.post('/auth/login')
           .send(memberDetails)
           .then(() => {
             this.props.updateAuth();
             this.props.router.push('/profile');
           });
  }
  signUp(memberDetails) {
    request.post('/auth/signup')
           .send(memberDetails)
           .then(() => {
             this.props.updateAuth();
             this.props.router.push('/profile');
           });
  }
  render() {
    let memberDisplayElement;
    if (!this.state.profile) {
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
