import React, { Component } from 'react';
import { Link } from 'react-router';
import About from './about.jsx';

class Initial extends Component {
  render() {
    return (
      <div>
        Home picture will go here.
        <About />
      </div>
    );
  }
}

export default Initial;
