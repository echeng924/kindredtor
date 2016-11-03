import React, { Component } from 'react';

class RegisterForm extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      first_name: '',
      last_name: '',
      industry: '',
      interested_tech: '',
      blurb: '',
      file: '',
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
    let file = e.target.files[0];
    reader.onloadend = () => {
    this.setState({
      file: file,
      imagePreviewUrl: reader.result
      });
    }
    reader.readAsDataURL(file)
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  render() {
    return (
      <div className="registerForm">
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={this.state.email}
            onChange={this.handleInputChange}
          />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.handleInputChange}
          />
          <input
            type="text"
            name="first_name"
            placeholder="First Name"
            value={this.state.first_name}
            onChange={this.handleInputChange}
          />
          <input
            type="text"
            name="last_name"
            placeholder="Last Name"
            value={this.state.last_name}
            onChange={this.handleInputChange}
          />
          <input
            type="text"
            name="current_title"
            placeholder="Current Title"
            value={this.state.current_title}
            onChange={this.handleInputChange}
          />
          <select name="industry" value={this.state.industry} onChange={this.handleInputChange}>
            <option value="A">Current Industry:</option>
            <option value="A">Apple</option>
            <option value="B">Banana</option>
          </select>
          <select name="interested_tech" value={this.state.interested_tech} onChange={this.handleInputChange}>
            <option value="A">Languages:</option>
            <option value="A">Apple</option>
            <option value="B">Banana</option>
          </select>
          <textarea
            name="blurb"
            placeholder="Tell us about you..."
            value={this.state.blurb}
            onChange={this.handleInputChange}
          />
          <input
            name="photo"
            type="file"
            onChange={this.handleImageChange}
          />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
export default RegisterForm;
