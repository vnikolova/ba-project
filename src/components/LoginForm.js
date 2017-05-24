import React, { Component } from 'react';
import {Input, Button } from './';

class LoginForm extends Component {

  constructor(props){
    super(props);

    this.state = {
    };
  }

  render(){

  	const style = {
        width: '80%',
        margin: '0 auto',
      };

  	return(
  		<div className="col center" style={style}>
            <Input text="E-mail" />
            <Input text="Password" />
            <Button main text="Log in" />
         </div>
  		);
  }
}

  export default LoginForm;