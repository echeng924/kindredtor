import React, { Component } from 'react';
import request from 'superagent';

class DailyMatch extends Component {
  constructor() {
    super();
    this.state = {
      profile: {},
      match: {},
    };
  }
  componentDidMount() {
    this.updateAuth();
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
  }
  //how do I pass in parameters of interested tech and role
  //write a conditional to check what the role is...if profile.role === mentor pass in mentee as parameter
  //on componentDidMount load initial match
  //add onclick for next match on decline match button

  // getOneProfileMatch() {
  //   request.get('/api/members')
  //          .then((match) => {
  //             this.setState({ match: match });
  //          });
  // }
  render() {
    return (
      <div>
        Will show matches...what should be returned:
        <div id="matchProfile">
          <p>Image</p>
          <p>First Name</p>
          <p>Current Title</p>
          <p>Current Industry</p>
          <p>Tech language</p>
          <p>blurb</p>
        </div>
      </div>
    )
  }
}

export default DailyMatch;


//get request to members table, find by parameters
//in state...do dropdown information show up as null?
