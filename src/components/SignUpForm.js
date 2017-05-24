import React, { Component } from 'react';
import {Input, Button, Text } from './';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import theme from '../theme.js';

class SignUpForm extends Component {

  constructor(props){
    super(props);

    this.state = {
      name: '',
      email: '',
      password: '',
      passwordConfirmation: '',
      errors: {},
      isLoading: false
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
    this.setState({ errors: {}, isLoading: true });
    e.preventDefault();
    this.props.userSignUpRequest(this.state).then(
      () => {},
      ({ data }) => this.setState({errors: data, isLoading: false })
      );
  }

  render(){

    const style = {
        width: '80%',
        margin: '0 auto',
      };

    const { errors } = this.state;
    const { disabled } = theme.colors;
    
  	return(
              <div className="col center" style={style}>
                <Input 
                  type="text"
                  text="Name"
                  className={classnames("",{'has-error': errors.name})}
                  name="name"
                  value={this.state.name}
                  onChange={this.onChange}
                  />
                  {errors.name && <Text color={disabled}>{errors.name}</Text>}
                <Input
                  text="Enter your e-mail"
                  type="email"
                  name="email"
                  className={classnames("",{'has-error': errors.email})}
                  value={this.state.email}
                  onChange={this.onChange}
                />
                {errors.name && <Text color={disabled}>{errors.email}</Text>}
                <Input
                  text="Password"
                  type="password"
                  name="password"
                  className={classnames("",{'has-error': errors.password})}
                  value={this.state.Password}
                  onChange={this.onChange}
                  />
                  {errors.name && <Text color={disabled}>{errors.password}</Text>}
                <Input
                  text="Repeat password"
                  type="password"
                  name="passwordConfirmation"
                  className={classnames("",{'has-error': errors.passwordConfirmation})}
                  value={this.state.passwordConfirmation}
                  onChange={this.onChange}
                  />
                  {errors.name && <Text color={disabled}>{errors.passwordConfirmation}</Text>}
                <Button disabled={this.state.isLoading} main text="Sign up" onClick={this.onSubmit} />
              </div>
  		);
  }
}


SignUpForm.propTypes = {
  userSignUpRequest: PropTypes.func
};

export default SignUpForm;
