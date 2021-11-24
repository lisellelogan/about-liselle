import React, { Component } from "react";

class ContactForm extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  };

  render() {
    return (
      <form>
        <input type="text" name="firstName" value />
        <input />
        <input />
      </form>
    );
  }
}

export default ContactForm;
