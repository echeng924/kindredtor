import React, { Component } from 'react';
import request from 'superagent';
import { Link, withRouter } from 'react-router';
import Connection from './connection.jsx';


class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      profile: {},
      matches: {},
    };
  }
  componentDidMount() {
    this.updateAuth();
  }

  //settimeout somewhere...because we'll call the function on componentDidMount, but after updateAuth()
  // getAllMatches() {
  //   request.get(`/api/matches/{this.props.profile.id}`)
  //          .then((matches) => {
  //            this.setState({matches: matches})
  //          }).catch((err) => {
  //             console.log(err)
  //          });
  // }
  //take matches from state, map over them, return first name, last name, email, current title, ...and other things
  render() {
    let dashboardElements;
    if (this.state.profile) {
      dashboardElements = (
        <div>
          check that dashboard will render
        </div>
      );
    } else {
      dashboardElements = (
        this.props.router.push('/register')
      );
    }
    return (
      <div>
        { dashboardElements }
        <Connection />
      </div>
    );
  }
}

export default Dashboard;


//get All request to server for matches at '/api/matches'
//will be an array, map over and create individual match profile
