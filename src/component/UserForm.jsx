import React, { Component } from 'react'

class UserForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            firstName:'',
            lastName: '',
            email:'',
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
        
      };

    render() {
        return (
            <div className="user_form">
            
    
              

               

</div>
               

            
        )
    }
}

export default UserForm;
