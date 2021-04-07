import React from 'react'
import { MDBContainer, MDBRow, MDBCol, MDBIcon } from "mdbreact";

 function Body() {
    return (
        <div>
            <div className='Banner'>Financial Inclusion Plans</div>
            <div className="plans">
            <MDBContainer>
  <MDBRow>
    <MDBCol md="4">
        
        <MDBIcon icon="seedling" size="2x" /> <br/>
        Manage Funds <br/>
        Vestibulum id ligula porta felis euismod semper. Nullam quis risus eget urna mollis.
    </MDBCol>
    <MDBCol md="4">
    <MDBIcon icon="umbrella" size="2x" /> <br/>
    Get Insured <br/> 
    Vestibulum id ligula porta felis euismod semper. Nullam quis risus eget urna mollis.
        </MDBCol>
    <MDBCol md="4">
    <MDBIcon icon="lock" size="2x" /> <br/>
    Secure Platform <br/>
    Vestibulum id ligula porta felis euismod semper. Nullam quis risus eget urna mollis.
    </MDBCol>
  </MDBRow>
</MDBContainer>
            </div>
            
        </div>
    )
}

export default Body;