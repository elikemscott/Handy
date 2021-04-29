import React, { Component } from "react";
import { connect } from "react-redux";
import { addUser, deleteUser } from "../store/UserActions";
import "../App.css";
import UserForm from "../component/UserForm";
import UserInfo from "../component/UserInfo";
import { Link } from "react-router-dom";
import HomeNav from "./HomeNav";
import Footer from "./Footer";

class PendingPage extends Component {
  AddNewUser = (newUser) => {
    this.props.addUser(newUser);
  };

  deleteUser = (user_id) => {
    this.props.deleteUser(user_id);
  };

  render() {
    return (
      <div className="parent">
        <HomeNav /> <br /> <br /> <br /> <br />
        <div className="sidenav">
          <UserForm addUser={this.AddNewUser} />
        </div>
        <div className="main">
          <div>
            <div className="flex">
              <div className="ml-5 mb-2">Invoices</div>
              <div className="">
                <div className="container">
                  <input
                    className="form-control form-control-sm"
                    type="text"
                    placeholder="Filter Invoice"
                  />

                  <div className="container new_user_info">
                    {this.props.users.map((field, index) => {
                      return (
                        <span className="">
                          <UserInfo
                            key={field.id}
                            id={field.id}
                            firstName={field.firstName}
                            lastName={field.lastName}
                            email={field.email}
                            phone={field.phone}
                            product={field.product}
                            material={field.material}
                            workmanship={field.workmanship}
                            total={field.total}
                            removeUser={this.deleteUser}
                            details={field}
                          />
                        </span>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  users: state.users,
});

const mapDispatchToProps = {
  addUser: addUser,
  deleteUser: deleteUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(PendingPage);
