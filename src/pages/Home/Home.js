/*
 *  Copyright � Vik Nikolova 2017
 *  This code has been written by Viktoriya Nikolova as part of her final bachelor project
 *  It is not to be used for commercial use.
 */
import React, { Component } from 'react';
import {TopNav, SearchBar} from '../../components';
import colors from '../../theme.js';

class Home extends Component {
  render() {
    const style = {
      intro: {
        height: '500px',
        backgroundColor: colors.background
      }
    }
    return (
      <div>
	       <TopNav />
           <div>
          { /** Intro section begin
           * add background video
           **/}
           <div style={style.intro}>
           </div>
           <SearchBar />
           </div>
      </div>
      );
  }

};

export default Home;
