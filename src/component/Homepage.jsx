import React from "react";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarToggler,
  MDBCollapse,
  MDBNavItem,
  MDBNavLink,
  MDBContainer,
  MDBMask,
  MDBView,
  MDBBtn,
} from "mdbreact";
import { BrowserRouter as Router } from "react-router-dom";
import Footer from "./Footer";
import image5 from "../images/workers.png";
import { Link } from "react-router-dom";
import PanelPage from "./Dashboard";
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
      <div className="homepage_responsive">
        <header>
          <MDBNavbar color="bg-primary" fixed="top" dark expand="md" scrolling>
            <MDBNavbarBrand href="/">
              <strong>Handy</strong>
            </MDBNavbarBrand>
            {!this.state.isWideEnough && (
              <MDBNavbarToggler onClick={this.onClick} />
            )}
            <MDBCollapse isOpen={this.state.collapse} navbar>
              <MDBNavbarNav left>
                <MDBNavItem active>
                  <MDBNavLink to="/Homepage">Home</MDBNavLink>
                </MDBNavItem>
                <Link to="/PendingPage">
                  {" "}
                  <MDBNavItem>
                    <MDBNavLink to="/PendingPage">Pending</MDBNavLink>
                  </MDBNavItem>{" "}
                </Link>
                <MDBNavItem>
                  <MDBNavLink to="/ReportPage">Reports</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink to="/Sample"> Financial Services</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink to="#">Settings</MDBNavLink>
                </MDBNavItem>
              </MDBNavbarNav>
            </MDBCollapse>
          </MDBNavbar>

          <MDBView
            className="home"
            src="https://fed.upou.edu.ph/wp-content/uploads/2018/11/Plain-White-Background.jpg"
          >
            <MDBMask
              overlay="white-light"
              className="flex-center flex-column text-white text-center"
            >
              <div className="home_flex">
                <div className="home_flex1">
                  <Link to="/Form">
                    <MDBBtn gradient="peach" className="invoice_bttn">
                      Create an Invoice
                    </MDBBtn>
                  </Link>
                </div>
                <div className="home_flex2 shadow-box-example z-depth-5">
                  <PanelPage />
                </div>
              </div>
            </MDBMask>
          </MDBView>

          <div className="home_mobile">
            <div>
            <Link to='/Form'>  <MDBBtn gradient="purple">Create Invoice</MDBBtn> </Link>
            </div>
            <div className="balance" gradient="purple">
              <p className="avail">Available Balance</p>
              <p className="amount">
                <span>$</span>9,903
              </p>
            </div>
            <br />
            <h6 className="dashboard_tittle">Dashboard</h6>
            <div className="dashboard">
              <div className="pending">
                <span className='invoice_tittle_m' >Invoices <br/> </span>  <span  className='invoice_tittle'> <span className='pending_num'>6</span> pending </span>  <span className="pending_notif">$3,808</span>
              </div>
              <div className="pending">
                <span className='invoice_tittle_m' >Reports </span>  <br/> <span  className='invoice_tittle'> <span className='pending_num'>11</span> reports created </span> <span className="pending_notif"></span>
              </div>
              <div className="pending">
                <span className='invoice_tittle_m' >Monthly Revenue</span>  <br/> <span className='invoice_tittle'> <span>Last Month</span> </span>  <span className="pending_notif">$3,350</span>
              </div>
              <div className="pending">
                <span className='invoice_tittle_m' >Total Revenue</span> <span className="total_rev">$16,200</span>
              </div>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default Homepage;
