import React from 'react';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardHeader, MDBCardFooter, MDBBtn, MDBContainer,MDBRow,MDBCol } from
"mdbreact";

const PanelPage = () => {
return (
    <MDBContainer className="flexContainer">
      <MDBRow>
        <MDBCol>  <MDBCard style={{ width: "15rem", marginTop: "6rem" }} className="text-center">
    <MDBCardHeader color="white-color"><span style={{ color: "black"}} > Pending</span></MDBCardHeader>
    <a className="bttn" style={{ backgroundColors: "white"}}> <MDBCardBody>
      
      <MDBCardText>
        You have <span style={{ color: "red"}}  >0</span> pending invoices.
      </MDBCardText>
      
    </MDBCardBody> </a>
    
  </MDBCard> </MDBCol>


        <MDBCol> <MDBCard style={{ width: "15rem", marginTop: "6rem" }} className="text-center">
    <MDBCardHeader color="white-color"><span style={{ color: "black"}} >Reports</span></MDBCardHeader>
    <a><MDBCardBody>
      
      <MDBCardText>
        You have created <span style={{ color: "red"}} >0</span> reports.
      </MDBCardText>
      
    </MDBCardBody></a>
    
  </MDBCard></MDBCol>
        
        <MDBCol> <MDBCard style={{ width: "15rem", marginTop: "6rem" }} className="text-center">
    <MDBCardHeader color="white-color"><span style={{ color: "black"}} >History</span></MDBCardHeader>
   <a> <MDBCardBody>
      
      <MDBCardText>
        No recent history
      </MDBCardText>
     
    </MDBCardBody> </a>
    
  </MDBCard></MDBCol>

        <MDBCol> <MDBCard style={{ width: "15rem", marginTop: "6rem" }} className="text-center">
    <MDBCardHeader color="white-color"><span style={{ color: "black"}} >Loans</span></MDBCardHeader>
   <a> <MDBCardBody>
      
      <MDBCardText>
        You have <span>0</span> loans
      </MDBCardText>
      
    </MDBCardBody> </a>
    
  </MDBCard></MDBCol>
      </MDBRow>
    </MDBContainer>
);
};

export default PanelPage;