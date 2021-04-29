import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardHeader,
  MDBCardFooter,
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
} from "mdbreact";

const PanelPage = () => {
  return (
    <MDBContainer className="flexContainer">
      <h3 style={{ color: "black", fontSize: "30px" }}>Dashboard</h3>
      <MDBRow>
        <MDBCol size="12">
          {" "}
          <MDBCard
            style={{ width: "15rem", marginTop: "6rem" }}
            className="text-center"
          >
            <MDBCardHeader color="white-color">
              <span style={{ color: "black" }}>
                {" "}
                Invoices <br />{" "}
                <span>
                  {" "}
                  <span>6</span> pending{" "}
                </span>{" "}
              </span>
            </MDBCardHeader>
            <a className="bttn" style={{ backgroundColors: "white" }}>
              {" "}
              <MDBCardBody>
                <MDBCardText>
                  <span style={{ color: "red", fontSize: "50px" }}>0</span>
                </MDBCardText>
              </MDBCardBody>{" "}
            </a>
          </MDBCard>{" "}
        </MDBCol>

        <MDBCol size="12">
          {" "}
          <MDBCard
            style={{ width: "15rem", marginTop: "6rem" }}
            className="text-center"
          >
            <MDBCardHeader color="white-color">
              <span style={{ color: "black" }}>Reports</span>
            </MDBCardHeader>
            <a>
              <MDBCardBody>
                <MDBCardText>
                  <span style={{ color: "red", fontSize: "50px" }}>0</span> .
                </MDBCardText>
              </MDBCardBody>
            </a>
          </MDBCard>
        </MDBCol>

        <MDBCol className="col-sm-6" size="12">
          {" "}
          <MDBCard
            style={{ width: "15rem", marginTop: "6rem" }}
            className="text-center"
          >
            <MDBCardHeader color="white-color">
              <span style={{ color: "black" }}>Monthly Revenue</span>
            </MDBCardHeader>
            <a>
              {" "}
              <MDBCardBody>
                <MDBCardText>
                  <span style={{ color: "red", fontSize: "50px" }}>0</span>
                </MDBCardText>
              </MDBCardBody>{" "}
            </a>
          </MDBCard>
        </MDBCol>

        <MDBCol size="12" className="col-sm-6">
          {" "}
          <MDBCard
            style={{ width: "15rem", marginTop: "6rem" }}
            className="text-center"
          >
            <MDBCardHeader color="white-color">
              <span style={{ color: "black" }}>Total Revenue</span>
            </MDBCardHeader>
            <a>
              {" "}
              <MDBCardBody>
                <MDBCardText>
                  <span style={{ color: "red", fontSize: "50px" }}>0</span>
                </MDBCardText>
              </MDBCardBody>{" "}
            </a>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default PanelPage;
