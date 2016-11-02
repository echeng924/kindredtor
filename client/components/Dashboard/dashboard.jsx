import React, { Component } from 'react';
import request from 'superagent';
import Connection from './connection.jsx';

class Dashboard extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        Will render a dashboard all matches.
        <Connection />
      </div>
    );
  }
}

export default Dashboard;


//get All request to server for matches at '/api/matches'
//use all and split into individual connection profile
