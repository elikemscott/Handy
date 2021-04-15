import React from 'react'
import {Link} from 'react-router-dom'
import{addAcceptedUser} from '../store/UserActions'
import {connect} from 'react-redux'


  const UserInfo = ({firstName, lastName, email, item, amount, approve, id, removeUser, details, addAcceptedUser}) => {
    const handleClick = () => {
      removeUser(id)
    }

      return (
        
         <div className="row e-commerce">
                      <div className="col-md-3">
                        <div className="container">
                          <div className="row company-flex">
                            <div className="pic-box"></div>
      <div className="">{firstName}</div>
                          </div>
                        </div>
                      </div>
      <div className="col-md-2"> {lastName} </div>
      <div className="col-md-2">{email}</div>
      <div className="col-md-2">{item}</div>
                      <div className="col-md-1">
                      <span title='Add'>
                        <button onClick = {() => addAcceptedUser(details)} className="fas fa-plus red-text"></button>
                      </span>
                      </div>
                      <div className="col-md-2 action-flex">
                        <div className="pen">
                        <a> <i onClick = {handleClick} className="far fa-trash-alt red-text" title='delete'></i> </a>
                        </div>
                        <div className="trash">
                        
                        </div>
                      </div>
                    </div>
        
      )
    }


    const mapDispatchToProps = {
      addAcceptedUser,
    };
    export default connect(null, mapDispatchToProps) (UserInfo);