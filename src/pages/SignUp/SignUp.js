import React, { Component } from 'react';
import {TopNav} from '../../components';
import axios from 'axios';
import { Step, Stepper,StepLabel } from 'material-ui/Stepper';
import {FlatButton, RaisedButton, SelectField, MenuItem } from 'material-ui';
import ExpandTransition from 'material-ui/internal/ExpandTransition';
import PhoneIcon from 'material-ui/svg-icons/hardware/smartphone';
import EmailIcon from 'material-ui/svg-icons/communication/email';

import TextField from 'material-ui/TextField';
import theme from '../../theme.js';

class SignUp extends Component {

constructor(props){
  super(props);

  this.state = {
    userIsLoggedIn: false,
    userName: '',
    userEmail: '',
    phonePrefix: '',
    loading: false,
    finished: false,
    stepIndex: 1,
    userType: 1
  };

};

componentDidMount(){

  axios.get('/dashboard',this.state).then(function(obj){
    return obj.data;
  }).then(json => {
    console.log(json);
    this.setState({
      userName: json.name,
      userEmail: json.email
    });
  });
};

  dummyAsync = (cb) => {
    this.setState({loading: true}, () => {
      this.asyncTimer = setTimeout(cb, 500);
    });
  };

  handleNext = () => {
    const {stepIndex} = this.state;
    if (!this.state.loading) {
      this.dummyAsync(() => this.setState({
        loading: false,
        stepIndex: stepIndex + 1,
        finished: stepIndex >= 2,
      }));
    }
  };

  handlePrev = () => {
    const {stepIndex} = this.state;
    if (!this.state.loading) {
      this.dummyAsync(() => this.setState({
        loading: false,
        stepIndex: stepIndex - 1,
      }));
    }
  };

  getStepContent(stepIndex) {
    const wrapperTypes = {
      padding: '24px',
    };
    const isPersonalAccount = this.state.userType === 0;
    const userType = isPersonalAccount ? 'Personal' : 'Organization';

    const PhonePrefix = (
        <SelectField
          style={{
            width: '200px'
          }}
          value={this.state.phonePrefix || 1}
        >
          <MenuItem value={1} primaryText="+34 | Spain" />
          <MenuItem value={2} primaryText="+45 | Denmark" />
          <MenuItem value={3} primaryText="+44 | United Kingdom" />
          <MenuItem value={4} primaryText="+33 | France" />
        </SelectField>
      );


    switch (stepIndex) {
      case 0:
        return (
          <div className="row around">
            <div className="col" style={wrapperTypes}>
              <p>Want to contribute to an organization? You just need a personal account.</p>
              <RaisedButton label="Personal Account" fullWidth labelColor="#fff" backgroundColor={theme.colors.primaryGreen} />
            </div>
            <div className="col" style={wrapperTypes}>
            <p>If you&#39;re representing an organization, you can create it in the next stage by selecting this type.</p>
            <RaisedButton label="Organization Account" fullWidth labelColor="#fff" backgroundColor={theme.colors.primaryBlue} />
            </div>
          </div>
        );
      case 1:
      const personalInfo = (
          <div>
            I am <TextField floatingLabelText="Your age" /> years old.<br />
            I come from <TextField floatingLabelText="Your home country" /><br/>
            I live in <TextField floatingLabelText="The city you live in" /><br/>
            During the day I am <TextField floatingLabelText="Your job" /><br/>
            but at night I become <TextField floatingLabelText="Your hidden talent" /><br/>
            My biggest passions are <TextField floatingLabelText="Name your passions" />
            <hr />

            <PhoneIcon/><TextField floatingLabelText="Contact number" />
          </div>
        );

      const orgInfo = (
        <div>
          <TextField floatingLabelText="Company Name" />
          <div>
             We care about <TextField floatingLabelText="What do you care about?" /><br/>
             Our work involves <TextField floatingLabelText="What do you do about it?" /><br/>
             We are currently located in <TextField floatingLabelText="Where are you?" /><br/><br/>

             <h3>Get verified</h3>
             <hr />
             <PhoneIcon/>{PhonePrefix} <TextField floatingLabelText="Contact number" />
          </div>
        </div>
        );
        return (
          <div>
            {isPersonalAccount ? personalInfo : orgInfo}
          </div>
        );
      case 2:
        return (
          <p>
            Try out different ad text to see what brings in the most customers, and learn how to
            enhance your ads using features like ad extensions. If you run into any problems with your
            ads, find out how to tell if they^#39;re running and how to resolve approval issues.
          </p>
        );
      default:
        return 'You\'re a long way from home sonny jim!';
    }
  }

  renderContent() {
    const {finished, stepIndex} = this.state;
    const contentStyle = {margin: '0 16px', overflow: 'hidden'};

    if (finished) {
      return (
        <div style={contentStyle}>
          <p>
            <a
              href="#"
              onClick={(event) => {
                event.preventDefault();
                this.setState({stepIndex: 0, finished: false});
              }}
            >
              Click here
            </a> to reset the example.
          </p>
        </div>
      );
    }

    return (
      <div style={contentStyle}>
        <div>{this.getStepContent(stepIndex)}</div>
        <div style={{marginTop: 24, marginBottom: 12}}>
          <FlatButton
            label="Back"
            disabled={stepIndex === 0}
            onTouchTap={this.handlePrev}
            style={{marginRight: 12}}
          />
          <RaisedButton
            label={stepIndex === 2 ? 'Finish' : 'Next'}
            primary={true}
            onTouchTap={this.handleNext}
          />
        </div>
      </div>
    );
  }

  render() {
    const { userIsLoggedIn, userName, loading, stepIndex } = this.state;

    return (
      <div>
        <TopNav simple />
        <div className="col center">
          <h2>Hello, {userName}!</h2>
          <h3>You are just steps away from finding endless opportunities.</h3>
        </div>
        <div style={{width: '100%', maxWidth: 700, margin: 'auto'}}>
        <Stepper activeStep={stepIndex}>
          <Step>
            <StepLabel>What do you need?</StepLabel>
          </Step>
          <Step>
            <StepLabel>Who are you?</StepLabel>
          </Step>
          <Step>
            <StepLabel>Finish</StepLabel>
          </Step>
        </Stepper>
        <ExpandTransition loading={loading} open={true}>
          {this.renderContent()}
        </ExpandTransition>
      </div>
      </div>
      );
  }

};

export default SignUp;
