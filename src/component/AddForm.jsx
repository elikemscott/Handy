import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import {addUser} from "../store/UserActions"

class AddForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            firstName:'',
            lastName: '',
            Email:'',
            item:'',
            amount:'',
            approve: '',
          
             
        }
    }
    handleChange = (e) => {
        this.setState({
          [e.target.name] : e.target.value
        });
      };

      handleSubmit = (e) => {
        e.preventDefault();
        const newUser = {
          firstName: this.state.firstName,
          lastName: this.state.lastName,
          email: this.state.email,
          item: this.state.item,
          amount: this.state.amount,
          approve: this.state.approve,
          

        
        };
        this.props.addUser(newUser) 
        this.setState({
          firstName:'',
          lastName:'',
          email:'',
          item:'',
          amount:'',
          approve: '',
         
        });

        this.props.history.push('/ConfirmPage');
        
      };

    render() {
        return (
            <div className="user_form">
            
    
              

               
<form className='user_form2' onSubmit={this.handleSubmit}>
  <h5>Invoice</h5> <hr/>
  
<div class="md-form">

  <input type="text" id="inputIconEx2" class="form-control" name ="firstName" value={this.state.firstName} className ="name" onChange={this.handleChange}/>
  <label for="inputIconEx2" className='form_label'>First Name</label>
</div>


<div class="md-form">

  <input type="text" id="inputIconEx2" class="form-control" name ="lastName" value={this.state.lastName} className ="name" onChange={this.handleChange}/>
  <label for="inputIconEx2" className='form_label'>Last Name</label>
</div> 


<div class="md-form">

  <input type="email" id="inputIconEx2" class="form-control" name ="email" value={this.state.email} className ="name" onChange={this.handleChange}/>
  <label for="inputIconEx2" className='form_label'>Email </label>
</div>

<div class="md-form">

  <input type="text" id="inputIconEx2" class="form-control" name ="item" value={this.state.item} className ="name" onChange={this.handleChange}/>
  <label for="inputIconEx2" className='form_label'>Item </label>
</div>


<div class="md-form">

  <input type="text" id="inputIconEx2" class="form-control" name ="amount" value={this.state.amount} className ="name" onChange={this.handleChange}/> 
  <label htmlFor="inputIconEx2" className='form_label'>Amount</label>
</div>





<button className="btn blue-gradient btn-sm">Add</button>


</form>
</div>
               

            
        )
    }
}

const mapStateToProps = (state, ownProps) => ({
    user: state.users.find(user => user.id === ownProps.match.params.id)
    });
    
    const mapDispatchToProps = {
      addUser: addUser
    }
    
    export default  connect(mapStateToProps, mapDispatchToProps)(AddForm);
