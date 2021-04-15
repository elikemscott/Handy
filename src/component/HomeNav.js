import React from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBContainer, MDBMask, MDBView, MDBBtn } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';
import Footer from './Footer';
import image5 from '../images/workers.png';
import {Link} from 'react-router-dom'
class HomeNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      isWideEnough: false,
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
      collapse: !this.state.collapse,
    });
  }

  render() {
    return (
      <div>
        <header>
          
            <MDBNavbar color="bg-primary" fixed="top" dark expand="md" scrolling >
              <MDBNavbarBrand href="/">
                <strong>Handy</strong>
              </MDBNavbarBrand>
              {!this.state.isWideEnough && <MDBNavbarToggler onClick={this.onClick} />}
              <MDBCollapse isOpen={this.state.collapse} navbar>
                <MDBNavbarNav left>
                  <MDBNavItem active>
                    <MDBNavLink to="#">Home</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="/ReportPage">Reports</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="/PendingPage">Pending</MDBNavLink>
                  </MDBNavItem>
                  
                  <MDBNavItem>
                    <MDBNavLink to="#">Investment</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="#">Loans</MDBNavLink>
                  </MDBNavItem>
                </MDBNavbarNav>
              </MDBCollapse>
            </MDBNavbar>
          

        
        </header>

        

       
      </div>
    );
  }
}

export default HomeNav;