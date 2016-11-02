import React from 'react';
import { Router, Route, hashHistory } from 'react-router';
import App from '../App.jsx';
import RegisterForm from '../Auth/registerForm.jsx';

const Routes = () => {
  return(
    <Router history={hashHistory}>
      <Route path='/' component={App} />
      <Route path='/register' component={RegisterForm} />
    </Router>
  )
}

export default Routes;
