import React from 'react';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardHeader, MDBCardFooter, MDBBtn, MDBContainer,MDBRow,MDBCol } from
"mdbreact";

const PanelPage = () => {
return (
    <MDBContainer className="flexContainer">
      <h3  style={{ color: "black", fontSize: "30px"}} >Dashboard</h3>
      <MDBRow>
        <MDBCol>  <MDBCard style={{ width: "15rem", marginTop: "6rem" }} className="text-center">
    <MDBCardHeader color="white-color"><span style={{ color: "black"}} > Pending</span></MDBCardHeader>
    <a className="bttn" style={{ backgroundColors: "white"}}> <MDBCardBody>
      
      <MDBCardText>
         <span style={{ color: "red", fontSize: "50px"}}  >0</span> 
      </MDBCardText>
      
    </MDBCardBody> </a>
    
  </MDBCard> </MDBCol>


        <MDBCol> <MDBCard style={{ width: "15rem", marginTop: "6rem" }} className="text-center">
    <MDBCardHeader color="white-color"><span style={{ color: "black"}} >Reports</span></MDBCardHeader>
    <a><MDBCardBody>
      
      <MDBCardText>
        <span style={{ color: "red", fontSize: "50px"}} >0</span> .
      </MDBCardText>
      
    </MDBCardBody></a>
    
  </MDBCard></MDBCol>
        
        <MDBCol> <MDBCard style={{ width: "15rem", marginTop: "6rem" }} className="text-center">
    <MDBCardHeader color="white-color"><span style={{ color: "black"}} >History</span></MDBCardHeader>
   <a> <MDBCardBody>
      
      <MDBCardText>
      <span style={{ color: "red", fontSize: "50px"}}>0</span> 
      </MDBCardText>
     
    </MDBCardBody> </a>
    
  </MDBCard></MDBCol>

        <MDBCol> <MDBCard style={{ width: "15rem", marginTop: "6rem" }} className="text-center">
    <MDBCardHeader color="white-color"><span style={{ color: "black"}} >Loans</span></MDBCardHeader>
   <a> <MDBCardBody>
      
      <MDBCardText>
         <span style={{ color: "red", fontSize: "50px"}}>0</span> 
      </MDBCardText>
      
    </MDBCardBody> </a>
    
  </MDBCard></MDBCol>
      </MDBRow>
    </MDBContainer>
);
};

export default PanelPage;