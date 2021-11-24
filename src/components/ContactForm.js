import React, { Component } from "react";

class ContactForm extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  };

  handleOnChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({
      [name]: value,
    });
  };

  handleOnSubmit = (event) => {
    event.preventDefault();
    this.setState({
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    });
  };

  render() {
    return (
      <form>
        <input
          type="text"
          name="firstName"
          value={this.state.firstName}
          placeholder="First Name"
          required
        />
        <input
          type="text"
          name="lastName"
          value={this.state.lastName}
          placeholder="Last Name"
          required
        />
        <input
          type="email"
          name="email"
          value={this.state.email}
          placeholder="Email"
          required
        />
        <input
          type="textarea"
          name="message"
          value={this.state.message}
          placeholder="Type your message here"
          required
        />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default ContactForm;
