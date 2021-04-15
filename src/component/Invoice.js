import React from 'react';
import { MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';
import Navbar from './Navbar';
import HomeNav from './HomeNav';

class FormsPage extends React.Component {
  state = {
    fname: 'Mark',
    lname: 'Otto',
    email: '',
    item: '',
    amount: '',
    total: ''
  };

  submitHandler = event => {
    event.preventDefault();
    event.target.className += ' was-validated';
  };

  changeHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <div invoice-body>
          <HomeNav/>
        <form
          className='needs-validation'
          onSubmit={this.submitHandler}
          noValidate
          className='invoice-form'
        >
          <MDBRow>
            <MDBCol md='4'>
              <MDBInput
                icon='user'
                value={this.state.fname}
                name='fname'
                onChange={this.changeHandler}
                type='text'
                id='materialFormRegisterNameEx'
                label='First name'
                outline
                required
              >
                <div className='valid-feedback ml-3 pl-3'>Looks good!</div>
              </MDBInput>
            </MDBCol>
            <MDBCol md='4'>
              <MDBInput
                icon='address-card'
                value={this.state.lname}
                name='lname'
                onChange={this.changeHandler}
                type='text'
                id='materialFormRegisterEmailEx2'
                label='Last name'
                outline
                required
              >
                <div className='valid-feedback ml-3 pl-3'>Looks good!</div>
              </MDBInput>
            </MDBCol>
            <MDBCol md='4'>
              <MDBInput
                icon='envelope-open'
                value={this.state.email}
                onChange={this.changeHandler}
                type='email'
                id='materialFormRegisterConfirmEx3'
                name='email'
                label='Your Email address'
                outline
              >
                <small id='emailHelp' className='form-text text-muted'>
                  We'll never share your email with anyone else.
                </small>
              </MDBInput>
            </MDBCol>
          </MDBRow>
          <MDBRow>
            <MDBCol md='4'>
              <MDBInput
                icon='shopping-basket'
                value={this.state.item}
                onChange={this.changeHandler}
                type='text'
                id='materialFormRegisterPasswordEx4'
                name='city'
                label='Item'
                outline
                required
              >
                <div className='invalid-feedback ml-3 pl-3'>
                  Please provide a valid item.
                </div>
                <div className='valid-feedback ml-3 pl-3'>Looks good!</div>
              </MDBInput>
            </MDBCol>
            <MDBCol md='4'>
              <MDBInput
                icon='money-bill-wave'
                value={this.state.amount}
                onChange={this.changeHandler}
                type='text'
                id='materialFormRegisterPasswordEx4'
                name='state'
                label='Amount'
                outline
                required
              >
                <div className='invalid-feedback ml-3 pl-3'>
                  Please provide a valid amount.
                </div>
                <div className='valid-feedback ml-3 pl-3'>Looks good!</div>
              </MDBInput>
            </MDBCol>
            
          </MDBRow>

          <MDBRow>
            <MDBCol md='4'>
              <MDBInput
                icon='shopping-basket'
                value={this.state.item}
                onChange={this.changeHandler}
                type='text'
                id='materialFormRegisterPasswordEx4'
                name='city'
                label='Item'
                outline
                required
              >
                <div className='invalid-feedback ml-3 pl-3'>
                  Please provide a valid city.
                </div>
                <div className='valid-feedback ml-3 pl-3'>Looks good!</div>
              </MDBInput>
            </MDBCol>
            <MDBCol md='4'>
              <MDBInput
                icon='money-bill-wave'
                value={this.state.amount}
                onChange={this.changeHandler}
                type='text'
                id='materialFormRegisterPasswordEx4'
                name='state'
                label='Amount'
                outline
                required
              >
                <div className='invalid-feedback ml-3 pl-3'>
                  Please provide a valid state.
                </div>
                <div className='valid-feedback ml-3 pl-3'>Looks good!</div>
              </MDBInput>
            </MDBCol>
            
          </MDBRow>

          <MDBRow>
            <MDBCol md='4'>
              <MDBInput
                icon='shopping-basket'
                value={this.state.item}
                onChange={this.changeHandler}
                type='text'
                id='materialFormRegisterPasswordEx4'
                name='city'
                label='Item'
                outline
                required
              >
                <div className='invalid-feedback ml-3 pl-3'>
                  Please provide a valid city.
                </div>
                <div className='valid-feedback ml-3 pl-3'>Looks good!</div>
              </MDBInput>
            </MDBCol>
            <MDBCol md='4'>
              <MDBInput
                icon='money-bill-wave'
                value={this.state.amount}
                onChange={this.changeHandler}
                type='text'
                id='materialFormRegisterPasswordEx4'
                name='state'
                label='Amount'
                outline
                required
              >
                <div className='invalid-feedback ml-3 pl-3'>
                  Please provide a valid state.
                </div>
                <div className='valid-feedback ml-3 pl-3'>Looks good!</div>
              </MDBInput>
            </MDBCol>
            
          </MDBRow>

          <MDBRow>
            <MDBCol md='4'>
              <MDBInput
                icon='shopping-basket'
                value={this.state.item}
                onChange={this.changeHandler}
                type='text'
                id='materialFormRegisterPasswordEx4'
                name='city'
                label='Item'
                outline
                required
              >
                <div className='invalid-feedback ml-3 pl-3'>
                  Please provide a valid city.
                </div>
                <div className='valid-feedback ml-3 pl-3'>Looks good!</div>
              </MDBInput>
            </MDBCol>
            <MDBCol md='4'>
              <MDBInput
                icon='money-bill-wave'
                value={this.state.amount}
                onChange={this.changeHandler}
                type='text'
                id='materialFormRegisterPasswordEx4'
                name='state'
                label='Amount'
                outline
                required
              >
                <div className='invalid-feedback ml-3 pl-3'>
                  Please provide a valid state.
                </div>
                <div className='valid-feedback ml-3 pl-3'>Looks good!</div>
              </MDBInput>
            </MDBCol>
            
          </MDBRow>

          <MDBRow>
            <MDBCol md='4'>
              <MDBInput
                icon='shopping-basket'
                value={this.state.item}
                onChange={this.changeHandler}
                type='text'
                id='materialFormRegisterPasswordEx4'
                name='city'
                label='Item'
                outline
                required
              >
                <div className='invalid-feedback ml-3 pl-3'>
                  Please provide a valid city.
                </div>
                <div className='valid-feedback ml-3 pl-3'>Looks good!</div>
              </MDBInput>
            </MDBCol>
            <MDBCol md='4'>
              <MDBInput
                icon='money-bill-wave'
                value={this.state.amount}
                onChange={this.changeHandler}
                type='text'
                id='materialFormRegisterPasswordEx4'
                name='state'
                label='Amount'
                outline
                required
              >
                <div className='invalid-feedback ml-3 pl-3'>
                  Please provide a valid state.
                </div>
                <div className='valid-feedback ml-3 pl-3'>Looks good!</div>
              </MDBInput>
            </MDBCol>
            
          </MDBRow>

          <MDBRow>
            <MDBCol md='4'>
              <MDBInput
                icon='shopping-basket'
                value={this.state.item}
                onChange={this.changeHandler}
                type='text'
                id='materialFormRegisterPasswordEx4'
                name='city'
                label='Item'
                outline
                required
              >
                <div className='invalid-feedback ml-3 pl-3'>
                  Please provide a valid city.
                </div>
                <div className='valid-feedback ml-3 pl-3'>Looks good!</div>
              </MDBInput>
            </MDBCol>
            <MDBCol md='4'>
              <MDBInput
                icon='money-bill-wave'
                value={this.state.amount}
                onChange={this.changeHandler}
                type='text'
                id='materialFormRegisterPasswordEx4'
                name='state'
                label='Amount'
                outline
                required
              >
                <div className='invalid-feedback ml-3 pl-3'>
                  Please provide a valid state.
                </div>
                <div className='valid-feedback ml-3 pl-3'>Looks good!</div>
              </MDBInput>
            </MDBCol>
            
          </MDBRow>

          <MDBRow>
            <MDBCol md='4'>
              <MDBInput
                icon='shopping-basket'
                value={this.state.item}
                onChange={this.changeHandler}
                type='text'
                id='materialFormRegisterPasswordEx4'
                name='city'
                label='Item'
                outline
                required
              >
                <div className='invalid-feedback ml-3 pl-3'>
                  Please provide a valid city.
                </div>
                <div className='valid-feedback ml-3 pl-3'>Looks good!</div>
              </MDBInput>
            </MDBCol>
            <MDBCol md='4'>
              <MDBInput
                icon='money-bill-wave'
                value={this.state.amount}
                onChange={this.changeHandler}
                type='text'
                id='materialFormRegisterPasswordEx4'
                name='state'
                label='Amount'
                outline
                required
              >
                <div className='invalid-feedback ml-3 pl-3'>
                  Please provide a valid state.
                </div>
                <div className='valid-feedback ml-3 pl-3'>Looks good!</div>
              </MDBInput>
            </MDBCol>
            
          </MDBRow>

          <MDBRow>
            <MDBCol md='4'>
              <MDBInput
                icon='shopping-basket'
                value={this.state.item}
                onChange={this.changeHandler}
                type='text'
                id='materialFormRegisterPasswordEx4'
                name='city'
                label='Item'
                outline
                required
              >
                <div className='invalid-feedback ml-3 pl-3'>
                  Please provide a valid city.
                </div>
                <div className='valid-feedback ml-3 pl-3'>Looks good!</div>
              </MDBInput>
            </MDBCol>
            <MDBCol md='4'>
              <MDBInput
                icon='money-bill-wave'
                value={this.state.amount}
                onChange={this.changeHandler}
                type='text'
                id='materialFormRegisterPasswordEx4'
                name='state'
                label='Amount'
                outline
                required
              >
                <div className='invalid-feedback ml-3 pl-3'>
                  Please provide a valid state.
                </div>
                <div className='valid-feedback ml-3 pl-3'>Looks good!</div>
              </MDBInput>
            </MDBCol>
            
          </MDBRow>

          <MDBRow>
            <MDBCol md='4'>
              <MDBInput
                icon='shopping-basket'
                value={this.state.item}
                onChange={this.changeHandler}
                type='text'
                id='materialFormRegisterPasswordEx4'
                name='city'
                label='Item'
                outline
                required
              >
                <div className='invalid-feedback ml-3 pl-3'>
                  Please provide a valid city.
                </div>
                <div className='valid-feedback ml-3 pl-3'>Looks good!</div>
              </MDBInput>
            </MDBCol>
            <MDBCol md='4'>
              <MDBInput
                icon='money-bill-wave'
                value={this.state.amount}
                onChange={this.changeHandler}
                type='text'
                id='materialFormRegisterPasswordEx4'
                name='state'
                label='Amount'
                outline
                required
              >
                <div className='invalid-feedback ml-3 pl-3'>
                  Please provide a valid state.
                </div>
                <div className='valid-feedback ml-3 pl-3'>Looks good!</div>
              </MDBInput>
            </MDBCol>
            
          </MDBRow>

          <MDBRow>
            <MDBCol md='4'>
              <MDBInput
                icon='shopping-basket'
                value={this.state.item}
                onChange={this.changeHandler}
                type='text'
                id='materialFormRegisterPasswordEx4'
                name='city'
                label='Item'
                outline
                required
              >
                <div className='invalid-feedback ml-3 pl-3'>
                  Please provide a valid city.
                </div>
                <div className='valid-feedback ml-3 pl-3'>Looks good!</div>
              </MDBInput>
            </MDBCol>
            <MDBCol md='4'>
              <MDBInput
                icon='money-bill-wave'
                value={this.state.amount}
                onChange={this.changeHandler}
                type='text'
                id='materialFormRegisterPasswordEx4'
                name='state'
                label='Amount'
                outline
                required
              >
                <div className='invalid-feedback ml-3 pl-3'>
                  Please provide a valid state.
                </div>
                <div className='valid-feedback ml-3 pl-3'>Looks good!</div>
              </MDBInput>
            </MDBCol>
            
          </MDBRow>

          <MDBRow>
            <MDBCol md='4'>
              <MDBInput
                icon='shopping-basket'
                value={this.state.item}
                onChange={this.changeHandler}
                type='text'
                id='materialFormRegisterPasswordEx4'
                name='city'
                label='Item'
                outline
                required
              >
                <div className='invalid-feedback ml-3 pl-3'>
                  Please provide a valid city.
                </div>
                <div className='valid-feedback ml-3 pl-3'>Looks good!</div>
              </MDBInput>
            </MDBCol>
            <MDBCol md='4'>
              <MDBInput
                icon='money-bill-wave'
                value={this.state.amount}
                onChange={this.changeHandler}
                type='text'
                id='materialFormRegisterPasswordEx4'
                name='state'
                label='Amount'
                outline
                required
              >
                <div className='invalid-feedback ml-3 pl-3'>
                  Please provide a valid state.
                </div>
                <div className='valid-feedback ml-3 pl-3'>Looks good!</div>
              </MDBInput>
            </MDBCol>
            
          </MDBRow>

          <MDBRow>
            <MDBCol md='4'>
              <MDBInput
                icon='shopping-basket'
                value={this.state.item}
                onChange={this.changeHandler}
                type='text'
                id='materialFormRegisterPasswordEx4'
                name='city'
                label='Item'
                outline
                required
              >
                <div className='invalid-feedback ml-3 pl-3'>
                  Please provide a valid city.
                </div>
                <div className='valid-feedback ml-3 pl-3'>Looks good!</div>
              </MDBInput>
            </MDBCol>
            <MDBCol md='4'>
              <MDBInput
                icon='money-bill-wave'
                value={this.state.amount}
                onChange={this.changeHandler}
                type='text'
                id='materialFormRegisterPasswordEx4'
                name='state'
                label='Amount'
                outline
                required
              >
                <div className='invalid-feedback ml-3 pl-3'>
                  Please provide a valid state.
                </div>
                <div className='valid-feedback ml-3 pl-3'>Looks good!</div>
              </MDBInput>
            </MDBCol>
            
          </MDBRow>

          <MDBRow>
            <MDBCol md='4'>
              <MDBInput
                icon='shopping-basket'
                value={this.state.item}
                onChange={this.changeHandler}
                type='text'
                id='materialFormRegisterPasswordEx4'
                name='city'
                label='Item'
                outline
                required
              >
                <div className='invalid-feedback ml-3 pl-3'>
                  Please provide a valid city.
                </div>
                <div className='valid-feedback ml-3 pl-3'>Looks good!</div>
              </MDBInput>
            </MDBCol>
            <MDBCol md='4'>
              <MDBInput
                icon='money-bill-wave'
                value={this.state.amount}
                onChange={this.changeHandler}
                type='text'
                id='materialFormRegisterPasswordEx4'
                name='state'
                label='Amount'
                outline
                required
              >
                <div className='invalid-feedback ml-3 pl-3'>
                  Please provide a valid state.
                </div>
                <div className='valid-feedback ml-3 pl-3'>Looks good!</div>
              </MDBInput>
            </MDBCol>
            
          </MDBRow>

          <MDBRow>
            <MDBCol md='4'>
              <MDBInput
                icon='shopping-basket'
                value={this.state.item}
                onChange={this.changeHandler}
                type='text'
                id='materialFormRegisterPasswordEx4'
                name='city'
                label='Item'
                outline
                required
              >
                <div className='invalid-feedback ml-3 pl-3'>
                  Please provide a valid city.
                </div>
                <div className='valid-feedback ml-3 pl-3'>Looks good!</div>
              </MDBInput>
            </MDBCol>
            <MDBCol md='4'>
              <MDBInput
                icon='money-bill-wave'
                value={this.state.amount}
                onChange={this.changeHandler}
                type='text'
                id='materialFormRegisterPasswordEx4'
                name='state'
                label='Amount'
                outline
                required
              >
                <div className='invalid-feedback ml-3 pl-3'>
                  Please provide a valid state.
                </div>
                <div className='valid-feedback ml-3 pl-3'>Looks good!</div>
              </MDBInput>
            </MDBCol>
            
          </MDBRow>

          <MDBRow>
            <MDBCol md='4'>
              <MDBInput
                icon='shopping-basket'
                value={this.state.item}
                onChange={this.changeHandler}
                type='text'
                id='materialFormRegisterPasswordEx4'
                name='city'
                label='Item'
                outline
                required
              >
                <div className='invalid-feedback ml-3 pl-3'>
                  Please provide a valid city.
                </div>
                <div className='valid-feedback ml-3 pl-3'>Looks good!</div>
              </MDBInput>
            </MDBCol>
            <MDBCol md='4'>
              <MDBInput
                icon='money-bill-wave'
                value={this.state.amount}
                onChange={this.changeHandler}
                type='text'
                id='materialFormRegisterPasswordEx4'
                name='state'
                label='Amount'
                outline
                required
              >
                <div className='invalid-feedback ml-3 pl-3'>
                  Please provide a valid state.
                </div>
                <div className='valid-feedback ml-3 pl-3'>Looks good!</div>
              </MDBInput>
            </MDBCol>
            
          </MDBRow>

          <MDBRow>
            <MDBCol md='4'>
              <MDBInput
                icon='shopping-basket'
                value={this.state.item}
                onChange={this.changeHandler}
                type='text'
                id='materialFormRegisterPasswordEx4'
                name='city'
                label='Item'
                outline
                required
              >
                <div className='invalid-feedback ml-3 pl-3'>
                  Please provide a valid city.
                </div>
                <div className='valid-feedback ml-3 pl-3'>Looks good!</div>
              </MDBInput>
            </MDBCol>
            <MDBCol md='4'>
              <MDBInput
                icon='money-bill-wave'
                value={this.state.amount}
                onChange={this.changeHandler}
                type='text'
                id='materialFormRegisterPasswordEx4'
                name='state'
                label='Amount'
                outline
                required
              >
                <div className='invalid-feedback ml-3 pl-3'>
                  Please provide a valid state.
                </div>
                <div className='valid-feedback ml-3 pl-3'>Looks good!</div>
              </MDBInput>
            </MDBCol>
            
          </MDBRow>

          <MDBRow>
            <MDBCol md='4'>
              <MDBInput
                icon='shopping-basket'
                value={this.state.item}
                onChange={this.changeHandler}
                type='text'
                id='materialFormRegisterPasswordEx4'
                name='city'
                label='Item'
                outline
                required
              >
                <div className='invalid-feedback ml-3 pl-3'>
                  Please provide a valid city.
                </div>
                <div className='valid-feedback ml-3 pl-3'>Looks good!</div>
              </MDBInput>
            </MDBCol>
            <MDBCol md='4'>
              <MDBInput
                icon='money-bill-wave'
                value={this.state.amount}
                onChange={this.changeHandler}
                type='text'
                id='materialFormRegisterPasswordEx4'
                name='state'
                label='Amount'
                outline
                required
              >
                <div className='invalid-feedback ml-3 pl-3'>
                  Please provide a valid state.
                </div>
                <div className='valid-feedback ml-3 pl-3'>Looks good!</div>
              </MDBInput>
            </MDBCol>
            
          </MDBRow>

          <MDBCol md='5' className="total">
              <MDBInput
                icon='money-bill'
                value={this.state.total}
                onChange={this.changeHandler}
                type='text'
                id='materialFormRegisterConfirmEx3'
                name='total'
                label='Total'
                outline
                
              >
               
              </MDBInput>
            </MDBCol>

         
          
          <MDBBtn color='primary' type='submit'>
            Send
          </MDBBtn>
        </form>
      </div>
    );
  }
}

export default FormsPage;
