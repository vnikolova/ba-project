/*
 *  Copyright � Vik Nikolova 2017
 *  This code has been written by Viktoriya Nikolova as part of her final bachelor project
 *  It is not to be used for commercial use.
 */
 /*global FB*/

import React, { Component } from 'react';
import {TopNav, SearchBar, Button, FacebookButton, Input} from '../../components';
import theme from '../../theme.js';

class Home extends Component {

  render() {
    const style = {
      intro: {
        height: '90vh',
        backgroundColor: theme.colors.background,
        fontFamily: theme.fontFamilies.text
      },
      email: {
        width: '250px'
      }
    }
    return (
      <div className="col">
	       <TopNav />
           <div className="row around middle" style={style.intro}>
              <div className="col center">
                <h1>Meet your new team. Build your ideas.</h1>
              </div>
              <div className="col center">
                <div id="fb-root"></div>
                <div id="facebook-login">
                  <FacebookButton fb={FB} />
                </div>
                <span>or</span>
                <div className="col" style={style.email}>
                  <Input text="Enter your e-mail" />
                  <Button text="Continue" icon="" />
                </div>
              </div>
           </div>
      </div>
      );
  }

};

export default Home;
