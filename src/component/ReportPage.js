import React, { Component } from "react";
import { connect } from "react-redux";
import { addUser, deleteUser } from "../store/UserActions";
import "../App.css";
import UserForm from "../component/UserForm";
import UserInfo from "../component/UserInfo";
import { Link } from "react-router-dom";
import HomeNav from "./HomeNav";
import Footer from "./Footer";

class ReportPage extends Component {
  AddNewUser = (newUser) => {
    this.props.addUser(newUser);
  };

  deleteUser = (user_id) => {
    this.props.deleteUser(user_id);
  };

  render() {
    console.log(this.props.accepted_users);
    return (
      <div className="parent">
          <HomeNav/> <br/> <br/> <br/>
        

        <div className="main">
          <div>
           

            

            <div className="flex">
              <div className="dashboard">
               
              </div>
              <div className="startups">
                <div className="all">Reports</div>
                <div className="container">
                  <input
                    className="form-control form-control-sm"
                    type="text"
                    placeholder="Filter Reports"
                  />
                  <div className="row row-line">
                    <div className="col-md-3"> First Name</div>
                    <div className="col-md-2">Last Name</div>
                    <div className="col-md-2">Email</div>
                    <div className="col-md-2">Date</div>
                    <div className="col-md-1">Amount</div>
                    
                  </div>

                  <div className="container new_user_info">
                    {this.props.accepted_users.map((field, index) => {
                      return (
                        <span className="">
                          <UserInfo
                            key={field.id}
                            id={field.id}
                            firstName={field.firstNmae}
                            lastName={field.lastName}
                            email={field.email}
                            item={field.item}
                            amount={field.amount}
                            approve={field.approve}
                            removeUser={this.deleteUser}
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
  accepted_users: state.accepted_users
});

const mapDispatchToProps = {
  addUser: addUser,
  deleteUser: deleteUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(ReportPage);
