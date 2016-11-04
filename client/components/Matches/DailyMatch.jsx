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
    this.getOneProfileMatch();
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

  getOneProfileMatch() {
    let roleSelection;
    if(this.state.profile.role === 'mentor') {
      roleSelection = 'mentee';
    } else {
      roleSelection = 'mentor';
    }

    setTimeout(request.get(`/api/members?interested_tech=${this.state.profile.interested_tech}&role=${roleSelection}`)
           .then((match) => {
              this.setState({ match: match });
           }), 5000)
  }
  // handlePostToDb() {
  //   let matchData = ({
  //     member_id: this.state.profile.id,
  //     match_id: this.state.match.id,
  //   });
  //   request.post('/api/match')
  //          .send(matchData)
  //          .then(() => {
  //             console.log('successfully posted to matchdb');
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
          <button>Match</button>
          <p>onclick will render email form</p>
          <button>Pass</button>
        </div>
      </div>
    );
  }
}

export default DailyMatch;


//get request to members table, find by parameters
//in state...do dropdown information show up as null?
//onclick
