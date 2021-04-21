import React from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBContainer, MDBMask, MDBView, MDBBtn } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';
import Footer from './Footer';
import image5 from '../images/workers.png';
import {Link} from 'react-router-dom'
import PanelPage from './Dashboard';
class Homepage extends React.Component {
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
          
            <MDBNavbar color="bg-primary" fixed="top" dark expand="md" scrolling transparent>
              <MDBNavbarBrand href="/">
                <strong>Handy</strong>
              </MDBNavbarBrand>
              {!this.state.isWideEnough && <MDBNavbarToggler onClick={this.onClick} />}
              <MDBCollapse isOpen={this.state.collapse} navbar>
                <MDBNavbarNav left>
                  <MDBNavItem active>
                    <MDBNavLink to="/Homepage">Home</MDBNavLink>
                  </MDBNavItem>
                  <Link to="/PendingPage">  <MDBNavItem> 
                  <MDBNavLink to="/PendingPage">Pending</MDBNavLink>
                  </MDBNavItem> </Link>
                  <MDBNavItem>
                    <MDBNavLink to="/ReportPage">Reports</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="#"> History</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="#">Loans</MDBNavLink>
                  </MDBNavItem>
                </MDBNavbarNav>
              </MDBCollapse>
            </MDBNavbar>
          

          <MDBView src="https://mdbootstrap.com/img/Photos/Others/img%20(50).jpg">
            <MDBMask overlay="purple-light" className="flex-center flex-column text-white text-center">
              <div className="home_flex">
                <div className="home_flex1">
                  <h2>Experience a <br/>fresh way to <br/>manage money</h2>
                  <p>Reach your goals with personalized insights, <br/>
custom budgets, spend tracking, and subscription <br/>
monitoring—all for free.</p> <Link to="/AddForm">
<MDBBtn gradient="peach" className="invoice_bttn">Create an Invoice</MDBBtn>
</Link>
                  </div>
                <div className="home_flex2 shadow-box-example z-depth-5"><PanelPage/></div>
              </div>

            </MDBMask>
          </MDBView>
        </header>

        

        <Footer/>
      </div>
    );
  }
}

export default Homepage;