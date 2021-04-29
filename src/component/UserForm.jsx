import React, { Component } from "react";

class UserForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      product: "",
      materials: "",
      workmanship: "",
      total: "",
    };
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      product: this.state.product,
      phone: this.state.product,
      materials: this.state.workmanship,
      workmanship: this.state.workmanship,
      total: this.state.total,
    };
    this.props.addUser(newUser);
    this.setState({
      firstName: "",
      lastName: "",
      email: "",
      product: "",
      phone: "",
      materials: "",
      workmanship: "",
      total: "",
    });
  };

  render() {
    return <div className="user_form"></div>;
  }
}

export default UserForm;
