import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFormInline, MDBBtn } from "mdbreact";
import absa from "../images/AbsaLogo.jpg";
import blue from "../images/blue.png";
import stanbic from "../images/stanbic.jpg";
import fnb from "../images/fnb.png";
import izwe from "../images/izwe.png";
import HomeNav from "../component/HomeNav";

function Loans() {
  return (
    <div>
      <HomeNav /> <br /> <br />
      <MDBCol md="12">
        <MDBFormInline className="md-form mr-auto mb-4">
          <input
            className="form-control mr-sm-2"
            type="text"
            placeholder="Search"
            aria-label="Search"
          />
          <MDBBtn
            gradient="aqua"
            rounded
            size="sm"
            type="submit"
            className="mr-auto"
          >
            Search
          </MDBBtn>
        </MDBFormInline>
      </MDBCol>
      <MDBContainer>
        <MDBRow>
          <MDBCol size="4">
            <img src={absa} className="images" />
          </MDBCol>
          <MDBCol size="1"></MDBCol>
          <MDBCol size="7">
            <h5 className="bank_name">Absa Bank</h5>
            <MDBBtn gradient="blue" className="apply_btn">
              Apply now
            </MDBBtn>
          </MDBCol>
        </MDBRow>
        <hr />

        <MDBRow>
          <MDBCol size="4">
            <img src={stanbic} className="images_stanbic" />
          </MDBCol>
          <MDBCol size="1"></MDBCol>
          <MDBCol size="7">
            <h5 className="bank_name">Stanbic Bank</h5>
            <MDBBtn gradient="blue" className="apply_btn">
              Apply now
            </MDBBtn>
          </MDBCol>
        </MDBRow>
        <hr />
        <MDBRow>
          <MDBCol size="4">
            <img src={fnb} className="images_fnb" />
          </MDBCol>
          <MDBCol size="1"></MDBCol>
          <MDBCol size="7">
            <h5 className="bank_name">Fnb Bank</h5>
            <MDBBtn gradient="blue" className="apply_btn">
              Apply now
            </MDBBtn>
          </MDBCol>
        </MDBRow>
        <hr />

        <MDBRow>
          <MDBCol size="4">
            <img src={izwe} className="images_izwe" />
          </MDBCol>
          <MDBCol size="1"></MDBCol>
          <MDBCol size="7">
            <h5 className="bank_name">Izwe Savings and Loans</h5>
            <MDBBtn gradient="blue" className="apply_btn">
              Apply now
            </MDBBtn>
          </MDBCol>
        </MDBRow>
        <hr />

        <MDBRow>
          <MDBCol size="4">
            <img src={blue} className="images_blue" />
          </MDBCol>
          <MDBCol size="1"></MDBCol>
          <MDBCol size="7">
            <h5 className="bank_name">Blue Fianancial Services</h5>
            <MDBBtn gradient="blue" className="apply_btn">
              Apply now
            </MDBBtn>
          </MDBCol>
        </MDBRow>
        <hr />
      </MDBContainer>
    </div>
  );
}

export default Loans;
