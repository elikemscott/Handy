import React from 'react'
import {Link} from 'react-router-dom'
import{addAcceptedUser} from '../store/UserActions'
import {connect} from 'react-redux';
import { MDBContainer, MDBRow, MDBCol, MDBIcon } from "mdbreact";


  const ReportUserInfo = ({firstName, lastName, email, total, item, amount, approve, id, removeUser, details, addAcceptedUser}) => {
    const handleClick = () => {
      removeUser(id)
    }

    const handleAdd = () => {
      addAcceptedUser(details)
    }

    

      return (
        
        <div>
        <hr/>
        <MDBContainer>
  <MDBRow>
    <MDBCol size="8" className='report_name'>{firstName} {lastName}</MDBCol>
    <MDBCol size="4" className='report_amount'>{total}</MDBCol>
    
  </MDBRow>

  <MDBRow>
    <MDBCol size="8" className='report_inv'>Inv001</MDBCol>
    <MDBCol size="4" className='report_date'>26-04-20</MDBCol>
    
  </MDBRow>

  <MDBRow>
    <MDBCol size="8" className='report_paid'> <MDBIcon far icon="check-circle" /> Paid </MDBCol>
    <MDBCol size="4"></MDBCol>
    
  </MDBRow>
  
</MDBContainer>

<hr/>
        
    </div>
        
      )
    }


    const mapDispatchToProps = {
      addAcceptedUser,
    };
    export default connect(null, mapDispatchToProps) (ReportUserInfo);