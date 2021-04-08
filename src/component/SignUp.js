import React from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBInput, MDBBtn, MDBIcon, MDBModalFooter } from 'mdbreact';
import image3 from '../images/austin.jpg'

 function SignUp() {
    return (
     <div className='signup'>
         <div className='signupFlex'>
             <div className='flex1'>
                 <img src={image3} className='image3'/>
             </div>
             <div className='flex2'> 
             <MDBCard className='form'>
                 <MDBCardBody>
                     <form >
                     <p className="h4 text-center py-4">Sign up</p>
                     <MDBInput
                    label="Your name"
                    icon="user"
                    group
                    type="text"
                    validate
                    error="wrong"
                    success="right"
                  />

<MDBInput
                    label="Your number"
                    icon="phone"
                    group
                    type="text"
                    validate
                    error="wrong"
                    success="right"
                  />
                  <MDBInput
                    label="Your email"
                    icon="envelope" 
                    group
                    type="email"
                    validate
                    error="wrong"
                    success="right"
                    className='font-small'
                  />
                  
                   <MDBInput
                    label="Your password"
                    icon="lock"
                    group
                    type="password"
                    validate
                  />
                 
              <div className="text-center mb-2">
                <MDBBtn
                  type="button"
                  gradient="blue"
                  rounded
                  className="btn-block z-depth-1a"
                >
                  Sign up
                </MDBBtn>
              </div>
              <p className="font-small dark-grey-text text-right d-flex justify-content-center mb-3 pt-1">

                or Sign up with:
              </p>
              <div className="row my-3 d-flex justify-content-center">
                <MDBBtn
                  type="button"
                  color="white"
                  rounded
                  className="mr-md-3 z-depth-1a round"
                >
                  <MDBIcon fab icon="facebook-f" className="blue-text text-center" />
                </MDBBtn>
                
                <MDBBtn
                  type="button"
                  color="white"
                  rounded
                  className="z-depth-1a round"
                >
                  <MDBIcon fab icon="google-plus-g" className="blue-text" />
                </MDBBtn>
              </div>
              <MDBModalFooter className="mx-5 pt-2 mb-1">
              <p className="font-small grey-text d-flex justify-content-end">
                Already have an Account?
                <a href="#!" className="blue-text ml-1">

                  Login
                </a>
              </p>
            </MDBModalFooter>
                     </form>
                 </MDBCardBody>
             </MDBCard>
              </div>
         </div>
         
         
        
       
       
        
       
         

     </div>
    )
}

export default SignUp;