import React, { Component } from 'react';

const propTypes = {
  handleSignUpSubmit: React.PropTypes.func,
};

class RegisterForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      first_name: '',
      last_name: '',
      current_industry: '',
      role: '',
      interested_tech: '',
      blurb: '',
      picture: '',
      imagePreviewUrl: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleImageChange = this.handleImageChange.bind(this);
  }

  handleInputChange(e) {
    const target = e.target;
    const name = target.getAttribute('name');
    const value = target.value;
    const updated = {};
    updated[name] = value;
    this.setState(updated);
  }

  handleImageChange(e) {
    e.preventDefault();

    let reader = new FileReader();
    let picture = e.target.files[0];
    reader.onload = (upload) => {
    this.setState({
      picture: upload.target.result,
      });
    };
    reader.readAsDataURL(picture);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.handleSignUpSubmit(this.state);
    console.log('success signup');
  }

  render() {
    return (
      <div className="registerForm">
       <h2>Register</h2>
        <form onSubmit={this.handleSubmit}>
          <div><input
            type="text"
            name="email"
            placeholder="Email"
            value={this.state.email}
            onChange={this.handleInputChange}
          /></div>
          <div><input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.handleInputChange}
          /></div>
          <div><input
            type="text"
            name="first_name"
            placeholder="First Name"
            value={this.state.first_name}
            onChange={this.handleInputChange}
          /></div>
          <div><input
            type="text"
            name="last_name"
            placeholder="Last Name"
            value={this.state.last_name}
            onChange={this.handleInputChange}
          /></div>
          <div><input
            type="text"
            name="current_title"
            placeholder="Current Title"
            value={this.state.current_title}
            onChange={this.handleInputChange}
          /></div>
          <div><select name="industry" value={this.state.current_industry} onChange={this.handleInputChange}>
            <option value="" disabled>Current Industry:</option>
            <option value="Biotechnology">Biotechnology</option>
            <option value="Education">Education</option>
            <option value="Energy">Energy</option>
            <option value="Film/Media">Film/Media</option>
            <option value="Finance">Film/Media</option>
            <option value="Fintech">Fintech</option>
            <option value="Food">Food</option>
            <option value="Medical">Medical</option>
            <option value="Military">Military</option>
            <option value="Music">Music</option>
            <option value="Sports">Sports</option>
            <option value="Travel">Travel</option>
          </select></div>
          <div><select name="role" value={this.state.role} onChange={this.handleInputChange}>
            <option value="" disabled>Interested in being a:</option>
            <option value="Mentor">Mentor</option>
            <option value="Mentee">Mentee</option>
          </select></div>
          <div><select name="interested_tech" value={this.state.interested_tech} onChange={this.handleInputChange}>
            <option value="" disabled>What is your primary technology:</option>
            <option value="SQL">SQL</option>
            <option value="Java">Java</option>
            <option value="JavaScript">JavaScript</option>
            <option value="C#">C#</option>
            <option value="Python">Python</option>
            <option value="C++">C++</option>
            <option value="PHP">PHP</option>
            <option value="ios">ios</option>
            <option value="Ruby/Rails">Ruby/Rails</option>
          </select></div>
          <div><textarea
            name="blurb"
            placeholder="Tell us about you..."
            value={this.state.blurb}
            onChange={this.handleInputChange}
          /></div>
          <div><input
            name="photo"
            type="file"
            onChange={this.handleImageChange}
          /></div>
          <div><input type="submit" value="Register" /></div>
        </form>
      </div>
    );
  }
}

RegisterForm.propTypes = propTypes;

export default RegisterForm;
