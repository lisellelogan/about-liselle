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
      <>
        <h1>Get In Touch</h1>
        <form>
          <input
            type="text"
            name="firstName"
            value={this.state.firstName}
            placeholder="First Name"
            required
          />
          <br />
          <input
            type="text"
            name="lastName"
            value={this.state.lastName}
            placeholder="Last Name"
            required
          />
          <br />
          <input
            type="email"
            name="email"
            value={this.state.email}
            placeholder="Email"
            required
          />
          <br />
          <input
            type="textarea"
            name="message"
            value={this.state.message}
            placeholder="Type your message here"
            required
          />
          <br />
          <input type="submit" value="Submit" />
        </form>
      </>
    );
  }
}

export default ContactForm;
