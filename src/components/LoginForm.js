import React, { Component } from 'react';
import {Input, Button } from './';

class LoginForm extends Component {

  constructor(props){
    super(props);

    this.state = {
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
            <Input text="E-mail"
                  type="email"
                  name="email"
                  value={this.state.email}
                  onChange={this.onChange}
             />
            <Input text="Password"
                  type="password"
                  name="password"
                  value={this.state.Password}
                  onChange={this.onChange}
             />
            <Button main text="Log in" />
         </div>
  		);
  }
}

  export default LoginForm;