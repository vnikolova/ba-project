import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import {FacebookButton, Input, Button } from './';
import validateInput from '../../server/shared/validations/login';
import axios from 'axios';

/*global FB*/

class LoginForm extends Component {

  constructor(props){
    super(props);

    this.state = {
    	email: '',
    	password: '',
      redirect: false
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  isValid() {
    const { errors, isValid } = validateInput(this.state);

    if(!isValid) {
      this.setState({ errors });
    }

    return isValid;
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  onSubmit(e){
    e.preventDefault();

    if(this.isValid()){
          this.setState({ errors: {}, isLoading: true });

          axios.post('/api/users/login',this.state).then(function(obj){
            return obj.data;
          }).then(json => {
            this.setState({
              redirect: true,
              isLoading: false
            });
            console.log(json);
          });
  };
  }
  render(){
    const { redirect } = this.state;

  	const style = {
        width: '80%',
        margin: '0 auto',
      };

    if (redirect) {
      return <Redirect to='/dashboard'/>;
    }
  	return(
      <div>
        <div id="fb-root"></div>
        <div className="center" id="facebook-login">
          <FacebookButton fb={FB} />
        </div>
        <div className="center">or</div>
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
              <Button  disabled={this.state.isLoading} main text="Log in" onClick={this.onSubmit} />
           </div>
      </div>

  		);
  }
}

  export default LoginForm;
