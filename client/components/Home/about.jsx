import React, { Component } from 'react';

class About extends Component {
  render() {
    return (
      <div>
      <div className="aboutPage">
        <div className='aboutImage'>
          <img src='stylesheets/networking.jpeg' />
        </div>
        <div className="content">
          <div>
            <h2>Connecting talent with talent.</h2>
          </div>
          <div>
            <p>We are a New York City based organization hoping to bring the tech scene closer together.  Whether you are looking to learn or share your knowlege, this is where to go to make new connections! </p>
          </div>
        </div>
      </div>
      <div>
        <div className="howItWorksPage">
          <div><h2>How it works</h2></div>
          <div>
            <img src="stylesheets/about.png"/>
          </div>
        </div>
      </div>
    </div>
    );
  }
}

export default About;
