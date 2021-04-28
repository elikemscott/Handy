import React from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBIcon } from "mdbreact";

export default function Sample() {
    return (
        <div>
            <hr/>
            <MDBContainer>
      <MDBRow>
        <MDBCol size="8" className='report_name'>Name</MDBCol>
        <MDBCol size="4" className='report_amount'>Amount</MDBCol>
        
      </MDBRow>

      <MDBRow>
        <MDBCol size="8" className='report_inv'>Invoice Num</MDBCol>
        <MDBCol size="4" className='report_date'>Date</MDBCol>
        
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
