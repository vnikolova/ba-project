import React, { Component } from 'react';
import {Input, Button } from './';
import PropTypes from 'prop-types';

class SignUpForm extends Component {

  constructor(props){
    super(props);

    this.state = {
      name: '',
      email: '',
      password: '',
      passwordConfirmation: ''
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value, 
    });
  }

  onSubmit(e){
    e.preventDefault();
    this.props.userSignUpRequest(this.state);
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
                <Input
                  text="Enter your e-mail"
                  type="email"
                  name="email"
                  value={this.state.email}
                  onChange={this.onChange}
                />
                <Input
                  text="Password"
                  type="password"
                  name="password"
                  value={this.state.Password}
                  onChange={this.onChange}
                  />
                <Input
                  text="Repeat password"
                  type="password"
                  name="passwordConfirmation"
                  value={this.state.passwordConfirmation}
                  onChange={this.onChange}
                  />
                <Button main text="Sign up" onClick={this.onSubmit} />
              </div>
  		);
  }
}


SignUpForm.propTypes = {
  userSignUpRequest: PropTypes.func
};

export default SignUpForm;
