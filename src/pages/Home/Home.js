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

  loginWithFacebook() {
    console.log("logging in with facebook");
  }
  render() {
    const style = {
      intro: {
        height: '500px',
        backgroundColor: theme.colors.background,
        fontFamily: theme.fontFamilies.text
      }
    }
    return (
      <div className="col">
	       <TopNav />
           <div>
          { /** Intro section begin
           * add background video
           **/}
           <div style={style.intro}>
            <p>this is the home page. the user has not been logged in</p>
            <div id="fb-root"></div>
            <div id="facebook-login">
              <FacebookButton fb={FB} />
            </div>
            or
            <div className="row">
              <Input text="Enter your e-mail" />
              <Button text="Continue" icon="" />
            </div>
           </div>
           <SearchBar />
           </div>
      </div>
      );
  }

};

export default Home;
