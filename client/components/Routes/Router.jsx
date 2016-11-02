import React from 'react';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import App from '../App.jsx';
import Initial from '../Home/Initial.jsx';
import Auth from '../Auth/Auth.jsx';
import Dashboard from '../Dashboard/dashboard.jsx';

const Routes = () => {
  return(
    <Router history={hashHistory}>
      <Route path='/' component={App} />
      <Route path='/register' component={Auth} />
      <Route path='/dashboard' component={Dashboard} />
    </Router>
  )
}

export default Routes;
