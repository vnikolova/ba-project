/*
 *  Copyright � Vik Nikolova 2017
 *  This code has been written by Viktoriya Nikolova as part of her final bachelor project
 *  It is not to be used for commercial use.
 */

import React, { Component } from 'react';
import {TopNav, Button,Popup, LoginSection, CategoryItem} from '../../components';
import theme from '../../theme.js';
import {Row, Col} from 'react-flexbox-grid';
import TechIcon from 'material-ui/svg-icons/hardware/laptop';
import ScienceIcon from 'material-ui/svg-icons/action/lightbulb-outline';
import MusicIcon from 'material-ui/svg-icons/av/album';
import SportsIcon from 'material-ui/svg-icons/places/pool';
import FilmIcon from 'material-ui/svg-icons/image/camera-alt';
import CommunityIcon from 'material-ui/svg-icons/image/nature-people';
import _ from 'lodash';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginModalIsOpen: false,
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
        backgroundColor: theme.colors.cream
      },
      slideItem: {
        borderBottom: '3px solid black',
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
                    <h1>Do good by doing what you&#39;re best at.</h1>
                    <p>Join a project now to support the causes you believe in.</p>
                    <Button color="#fff" main text="Sign me up!" onClick={() => this.handleLoginModal(true)}/>
                  </Col>
           </Row>

           { /* section two - categories */}
            <Row center="xs" style={style.cats}>
              <h2 className="center">Discover our categories</h2>
            </Row>
            <Row center="xs">
                <Col xs={2}>
                  <CategoryItem color={theme.colors.science} icon={<ScienceIcon />} title="Science & Reserach"/>
                </Col>
                <Col xs={2}>
                  <CategoryItem color={theme.colors.primaryBlue} icon={<TechIcon />} title="Technology"/>
                </Col>
                <Col xs={2}>
                  <CategoryItem color={theme.colors.film} icon={<FilmIcon />} title="Film & Photography"/>
                </Col>

          </Row>
          <Row center="xs">
            <Col xs={2}>
              <CategoryItem color={theme.colors.music} icon={<MusicIcon />} title="Music"/>
            </Col>
            <Col xs={2}>
              <CategoryItem color={theme.colors.sports} icon={<SportsIcon />} title="Sports"/>
            </Col>
            <Col xs={2}>
              <CategoryItem color={theme.colors.primaryGreen} icon={<CommunityIcon />} title="Community"/>
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
