/*
 *  Copyright � Vik Nikolova 2017
 *  This code has been written by Viktoriya Nikolova as part of her final bachelor project
 *  It is not to be used for commercial use.
 */

import React, { Component } from 'react';
import {TopNav, Button,Popup, LoginSection, CategoryItem} from '../../components';
import theme from '../../theme.js';
import {Row, Col} from 'react-flexbox-grid';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginModalIsOpen: false
    };

    // This binding is necessary to make `this` work in the callback
  }
  handleLoginModal(state) {
    this.setState({
      loginModalIsOpen: state
    })
  }

  render() {
    const style = {
      intro: {
        height: '65vh',
        color: '#FFF'
      },
      cats: {
        height: '35vh',
        backgroundColor: theme.colors.cream
      }
    }
    return (
      <Col>
	       <TopNav onLoginClick={() => this.handleLoginModal(true)} />

        { /* section one intro */}

           <Row className="video-bg" style={style.intro} middle="xs">
                <video preload="preload" playsInline autoPlay muted loop>
                  <source src="video/bg-video.mp4" type="video/mp4" />
                </video>
                  <Col xsOffset={2} xs={4}>
                    <h1>Meet your new team. Build your ideas.</h1>
                    <p>No more time-wasting. No BS. </p>
                    <Button main text="Sign me up!" onClick={() => this.handleLoginModal(true)}/>
                  </Col>
           </Row>

           { /* section two - categories */}
            <Row center="xs">
              <h2 className="center">Discover our categories</h2>
            </Row>
            <Row center="xs">
                <Col xs={2}>
                  <CategoryItem title="Science & Reserach"/>
                </Col>
                <Col xs={2}>
                  <CategoryItem title="Technology"/>
                </Col>
                <Col xs={2}>
                  <CategoryItem title="Film & Photography"/>
                </Col>

          </Row>
          <Row center="xs">
          <Col xs={2}>
            <CategoryItem title="Music"/>
          </Col>
          <Col xs={2}>
            <CategoryItem title="Sports"/>
          </Col>
          <Col xs={2}>
            <CategoryItem title="Community"/>
          </Col>
          </Row>
           <Popup open={this.state.loginModalIsOpen} onClose={() => this.handleLoginModal(false)} title="Sign In" narrow>
            <LoginSection />
           </Popup>
      </Col>
      );
  }

};

export default Home;
