import React from 'react'
import {Link} from 'react-router-dom'
import{addAcceptedUser} from '../store/UserActions'
import {connect} from 'react-redux';
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdbreact";


  const UserInfo = ({firstName, lastName, email, phone, product, materials, workmanship, total, item, amount, approve, id, removeUser, details, addAcceptedUser}) => {
    const handleClick = () => {
      removeUser(id)
    }

    const handleAdd = () => {
      addAcceptedUser(details)
    }

    

      return (
        
        <div className='user_main'>
        <div className='user_sub'>
        <MDBContainer>
  <MDBRow>
    <MDBCol className='user_customer' size="8">CUSTOMER </MDBCol> 
    <MDBCol size="4">28th,April,2020</MDBCol>
   
  </MDBRow>
  
</MDBContainer> <hr/>
        
        <div> <span className='user_name'>{firstName} {lastName}</span> <br/> <br/> <span className='user_email'>{email}</span> <br/> <span className='user_phone'>{phone}</span> </div> 
        </div>
        
        <div className='user_product'>
            <div className='prod'> PRODUCT OR SERVICE</div> <hr/>
            <MDBContainer>
  <MDBRow>
    <MDBCol size="8">{product}</MDBCol>
    <MDBCol size="4">{total}</MDBCol>
   
  </MDBRow>
  
</MDBContainer> 

        </div>
                      
                      <di className='prod_margin'></di> <br/> <br/> <br/> <br/>
                      <MDBBtn tag="span" color="primary" onClick = {() => {handleAdd(); handleClick();}} className="fas fa-plus red-text"  >Add</MDBBtn>
                      <MDBBtn tag="a" role="button" color="primary" onClick = {handleClick} className="far fa-trash-alt red-text" title='delete'>Delete</MDBBtn>
                      


                    </div>
        
      )
    }


    const mapDispatchToProps = {
      addAcceptedUser,
    };
    export default connect(null, mapDispatchToProps) (UserInfo);