import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { addUser } from "../store/UserActions";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBModalFooter,
  MDBIcon,
  MDBCardHeader,
  MDBBtn,
  MDBInput,
} from "mdbreact";
import HomeNav from "./HomeNav";

class Form extends Component {
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
      phone: this.state.phone,
      product: this.state.product,
      materials: this.state.materials,
      workmanship: this.state.workmanship,
      total: this.state.total,
    };
    this.props.addUser(newUser);
    this.setState({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      product: "",
      materials: "",
      workmanship: "",
      total: "",
    });

    this.props.history.push("/ConfirmPage");
  };
  render() {
    return (
      <MDBContainer>
        <HomeNav />
        <MDBRow>
          <MDBCol md="6">
            <MDBCard className="invoice-padding">
              <MDBCardBody>
                <MDBCardHeader className="form-header deep-blue-gradient rounded">
                  <h3 className="my-3">
                    <MDBIcon icon="file-invoice-dollar" /> Invoice
                  </h3>
                </MDBCardHeader>
                <form onSubmit={this.handleSubmit}>
                  <div className="grey-text">
                    <MDBInput
                      label="Firstname"
                      icon="user-alt"
                      group
                      type="text"
                      validate
                      error="wrong"
                      success="right"
                      name="firstName"
                      value={this.state.firstName}
                      className="name"
                      onChange={this.handleChange}
                    />
                    <MDBInput
                      label="Lastname"
                      icon="user-alt"
                      group
                      type="text"
                      validate
                      error="wrong"
                      success="right"
                      name="lastName"
                      value={this.state.lastName}
                      className="name"
                      onChange={this.handleChange}
                    />
                    <MDBInput
                      label="Email"
                      icon="envelope"
                      group
                      type="email"
                      validate
                      error="wrong"
                      success="right"
                      name="email"
                      value={this.state.email}
                      className="name"
                      onChange={this.handleChange}
                    />
                    <MDBInput
                      label=" Phone Number"
                      icon="phone"
                      group
                      type="text"
                      validate
                      error="wrong"
                      success="right"
                      name="phone"
                      value={this.state.phone}
                      className="name"
                      onChange={this.handleChange}
                    />
                    <MDBInput
                      label=" Product or Service"
                      icon="shopping-basket"
                      group
                      type="text"
                      validate
                      error="wrong"
                      success="right"
                      name="product"
                      value={this.state.product}
                      className="name"
                      onChange={this.handleChange}
                    />
                    <MDBInput
                      label="Total Cost of Materials"
                      icon="list-ul"
                      group
                      type="text"
                      validate
                      error="wrong"
                      success="right"
                      name="materials"
                      value={this.state.materials}
                      className="name"
                      onChange={this.handleChange}
                    />
                    <MDBInput
                      label="Total Cost of Workmanship"
                      icon="wrench"
                      group
                      type="text"
                      error="wrong"
                      success="right"
                      name="workmanship"
                      value={this.state.workmanship}
                      className="name"
                      onChange={this.handleChange}
                    />
                    <MDBInput
                      label="Total Cost"
                      icon="money-check-alt"
                      group
                      type="text"
                      error="wrong"
                      success="right"
                      name="total"
                      value={this.state.total}
                      className="name"
                      onChange={this.handleChange}
                    />
                  </div>

                  <div className="text-center mt-4">
                    <MDBBtn color="light-blue" className="mb-3" type="submit">
                      Send Invoice
                    </MDBBtn>
                  </div>
                </form>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  user: state.users.find((user) => user.id === ownProps.match.params.id),
});

const mapDispatchToProps = {
  addUser: addUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
