import React, { Component } from 'react';
import {Input, Button } from './';

class SignUpForm extends Component {

  constructor(props){
    super(props);

    this.state = {
      name: '',
      email: '',
      password: ''
    };

    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value, 
    });
  }

  render(){

    const style = {
        width: '80%',
        margin: '0 auto',
      };
  	return(
              <div className="col center" style={style}>
                <Input 
                  type="text"
                  text="Name"
                  name="name"
                  value={this.state.name}
                  onChange={this.onChange}
                  />
                <Input text="Enter your e-mail" />
                <Input text="Password" />
                <Input text="Repeat password" />
                <Button main text="Sign up" onClick={this.props.onSignUp} />
              </div>
  		);
  }
}

  export default SignUpForm;