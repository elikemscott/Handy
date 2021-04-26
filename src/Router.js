import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import App from './App';
import AddForm from './component/AddForm';
import Homepage from './component/Homepage';
import Login from './component/Login';
import SignUp from './component/SignUp';
import HomeNav from './component/HomeNav';
import Invoice from './component/Invoice'
import Display from './component/Display';
import ConfirmPage from './component/ConfirmPage';
import PendingPage from './component/PendingPage';
import ReportPage from './component/ReportPage';
import Form from './component/Form';
import Loans from './component/Loans';


export default function Router() {
    return (
        <BrowserRouter>
        <Route exact path='/' component={App} />
        <Route path='/add/:id' component={AddForm}/>
        <Route exact={true} path="/Signup" component={SignUp} />
          <Route exact={true} path="/Login" component={Login} />
          <Route exact={true} path="/Homepage" component={Homepage}/>
          <Route exact={true} path="/Invoice" component={Invoice}/>
          <Route exact={true} path="/HomeNav" component={HomeNav}/>
          <Route exact={true} path="/Display" component={Display}/>
          <Route exact={true} path="/AddForm" component={AddForm}/>
          <Route exact={true} path="/ConfirmPage" component={ConfirmPage}/>
          <Route exact={true} path="/PendingPage" component={PendingPage}/>
          <Route exact={true} path="/ReportPage" component={ReportPage}/>
          <Route exact={true} path="/Form" component={Form}/>
          <Route exact={true} path="/Loans" component={Loans}/>
        
        
        </BrowserRouter>
    )
}