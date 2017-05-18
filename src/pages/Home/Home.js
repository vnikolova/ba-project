/*
 *  Copyright � Vik Nikolova 2017
 *  This code has been written by Viktoriya Nikolova as part of her final bachelor project
 *  It is not to be used for commercial use.
 */

import React, { Component } from 'react';
import {TopNav, SearchBar, Button, LoginForm} from '../../components';
import theme from '../../theme.js';

class Home extends Component {

  render() {
    const style = {
      intro: {
        height: '90vh',
        backgroundColor: theme.colors.background,
        fontFamily: theme.fontFamilies.text
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
                <LoginForm />
              </div>
           </div>
      </div>
      );
  }

};

export default Home;
