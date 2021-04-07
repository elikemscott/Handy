import React from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBIcon } from "mdbreact";

 function Footer() {
    return (
        <div className='footer'>
            <div className='footer-header'>Financial Inclusion Plans</div>

            <MDBContainer>
      <MDBRow>
        <MDBCol>
            Handy <br/> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </MDBCol>
        <MDBCol>
            <div className='news-border'>
            Latest News <br/>
            <ul className="fa-ul">
  <li><MDBIcon icon="angle-right" list />  List icons</li>
  <li><MDBIcon icon="angle-right" list />  can be used</li>
  <li><MDBIcon icon="angle-right" list  />  as bullets</li>
  <li><MDBIcon icon="angle-right" list />  in lists</li>
</ul>
            </div>
        </MDBCol>
        <MDBCol>
            Services <br/>
            <ul className="fa-ul">
  <li><MDBIcon icon="angle-right" list />  List icons</li>
  <li><MDBIcon icon="angle-right" list />  can be used</li>
  <li><MDBIcon icon="angle-right" list  />  as bullets</li>
  <li><MDBIcon icon="angle-right" list />  in lists</li>
</ul>
        </MDBCol>
        <MDBCol>
            Get In Touch
        <ul className="fa-ul">
  <li><MDBIcon icon="phone-alt" list />  List icons</li>
  <li><MDBIcon icon="envelope" list />  can be used</li>
  <li><MDBIcon icon="globe" list />  as bullets</li>
  <li><MDBIcon icon="map-marker-alt" list />  in lists</li>
</ul> <br/>
<MDBIcon fab icon="facebook-f" /> <MDBIcon fab icon="twitter" /> <MDBIcon fab icon="linkedin-in" /> <MDBIcon fab icon="google-plus-g" /> <MDBIcon fab icon="instagram" />
        </MDBCol>
      </MDBRow>
      <MDBRow></MDBRow>

      </MDBContainer>

      <div className='copyright'>Copyright &copy; 2021 Handy All rights reserved</div>
            
        </div>
    )
}


export default Footer;