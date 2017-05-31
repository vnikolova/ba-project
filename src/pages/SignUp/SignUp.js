import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {TopNav} from '../../components';
import axios from 'axios';
import { Step, Stepper,StepLabel } from 'material-ui/Stepper';
import {FlatButton, RaisedButton, SelectField, MenuItem } from 'material-ui';
import ExpandTransition from 'material-ui/internal/ExpandTransition';
import PhoneIcon from 'material-ui/svg-icons/hardware/smartphone';
import EmailIcon from 'material-ui/svg-icons/communication/email';
import CheckIcon from 'material-ui/svg-icons/navigation/check';

import TextField from 'material-ui/TextField';
import theme from '../../theme.js';

class SignUp extends Component {

constructor(props){
  super(props);

  this.state = {
    userIsLoggedIn: false,
    userName: '',
    userEmail: '',
    phoneNumber: '',
    loading: false,
    finished: false,
    stepIndex: 0,
    userType: 0,
    userInterests: [],
    confirmCode: ''
  };

  this.onChange = this.onChange.bind(this);
  this.onChangeSelect = this.onChangeSelect.bind(this);
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

//on input change
 onChange = (e) => {
     this.setState({
       [e.target.name]: e.target.value,
     });
   };

  onChangeSelect = (event, index, values) => {
    this.setState({
      userInterests: values,
    });
  };

  verifyPhoneNumber() {
    //generate confirmation code and save in state
    var code = "";
    var possible = "0123456789";

    for(var i=0; i < 5; i++){
      var num = possible.charAt(Math.floor(Math.random() * possible.length));
      code += num.toString();
    }

    this.setState({
      confirmCode: code
    });
    const { phoneNumber } = this.state;
    //send sms to the phone number provided
    axios.post('/sendsms',{"number": phoneNumber, "code": code}).then(function(json){
      console.log(json);
    });
  };

  onAccountTypeChange(type, e) {
    this.setState({
      userType: type
    });
  };

  dummyAsync = (cb) => {
    this.setState({loading: true}, () => {
      this.asyncTimer = setTimeout(cb, 500);
    });
  };

  handleNext = () => {
    const {stepIndex} = this.state;

    if(stepIndex === 1) {
      console.log(" in step 2");
      this.verifyPhoneNumber();
    } else if(stepIndex === 2) {
      if(this.state.confirmCode === this.state.userCode){
        this.dummyAsync(() => this.setState({
          finished: true
        }));
      }
    }
    if (!this.state.loading) {
      this.dummyAsync(() => this.setState({
        loading: false,
        stepIndex: stepIndex + 1
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

  isActive(value){
     return 'btn '+((value === this.state.userType) ?'active':'default');
   };

  getStepContent(stepIndex) {
    const wrapperTypes = {
      padding: '24px',
    };
    const isPersonalAccount = this.state.userType === 0;
    const userType = isPersonalAccount ? 'Personal' : 'Organization';

  const activeStyle = {
    border: '1px solid black'
  };

    switch (stepIndex) {
      case 0:

        return (
          <div>
          <div className="row around">
            <div className="col" style={wrapperTypes}>
              <p>Want to contribute to a project or create your own? You need a personal account.</p>
              <RaisedButton
              icon={isPersonalAccount ? <CheckIcon /> : false}
              label={isPersonalAccount ? "Personal Account" : 'Switch to Perosnal Account' }
              fullWidth
              labelColor="#fff"
              backgroundColor={theme.colors.primaryGreen}
              className={this.isActive(0)}
              onTouchTap={(e) => this.onAccountTypeChange(0,e)}/>
            </div>
            <div className="col" style={wrapperTypes}>
            <p>If you&#39;re representing an organization, you can create it in the next stage by selecting this type.</p>
            <RaisedButton
            icon={!isPersonalAccount ? <CheckIcon /> : false}
            label={isPersonalAccount ? "Switch to Organization Account" : 'Organization Account' }
            fullWidth
            labelColor="#fff"
            backgroundColor={theme.colors.primaryBlue}
            className={this.isActive(1)}
            onTouchTap={() => this.onAccountTypeChange(1)}
            />
            </div>
          </div>
          <span>Continue with a {isPersonalAccount ? 'personal': 'organization'} account?</span>
          </div>
        );
      case 1:
      const personalInfo = (
          <div>

            <span>I am </span>
            <TextField
              name="userAge"
              floatingLabelText="Your age"
              onChange={this.onChange}
              value={this.state.age}
            />
            <span>years old.</span> *<br />

            <span>I come from </span>
            <TextField
              name="country"
              floatingLabelText="Your home country"
              onChange={this.onChange}
              value={this.state.country}
            /> *<br/>

            <span>I live in </span>
            <TextField
               name="location"
               floatingLabelText="The city you live in"
               onChange={this.onChange}
               value={this.state.location}
             /> *<br/>

            <span>During the day I am </span>
            <TextField
              name="userJob"
              floatingLabelText="Your job"
              onChange={this.onChange}
              value={this.state.job}
            /> *<br/>

            <span>I am interested in </span>
            <SelectField
            name="userInterests"
            autoWidth
            multiple={true}
            style={{paddingTop: '2em'}}
            hintText="Select interests"
            value={this.state.userInterests}
            onChange={this.onChangeSelect}
            >
              <MenuItem checked={this.state.userInterests.indexOf(0) > -1} key={0} value={0} primaryText="Technology" />
              <MenuItem checked={this.state.userInterests.indexOf(1) > -1} key={1} value={1} primaryText="Science & Research" />
              <MenuItem checked={this.state.userInterests.indexOf(2) > -1} key={2} value={2} primaryText="Film & Photography" />
              <MenuItem checked={this.state.userInterests.indexOf(3) > -1} key={3} value={3} primaryText="Sports" />
              <MenuItem checked={this.state.userInterests.indexOf(4) > -1} key={4} value={4} primaryText="Community" />
            </SelectField> *

            <br/><br/>

          </div>
        );

      const orgInfo = (
        <div>
          <TextField name="orgName" floatingLabelText="Organization Name" />
          <div>
             <span>We care about </span>
             <TextField
               name="orgCause"
               floatingLabelText="What do you care about?"
               hintText="e.g. Air pollution, global warming"
               onChange={this.onChange}
               value={this.state.cause}
             /> *<br/>

             <span>Our work involves </span>
             <TextField
               name="orgAction"
               floatingLabelText="What do you do about it?"
               hintText="e.g. Raise awareness"
               onChange={this.onChange}
               value={this.state.action}
             /> *<br/>

             <span>We are currently located in </span>
             <TextField
               name="location"
               floatingLabelText="Where are you?"
               hintText="e.g. Barcelona,Spain"
               onChange={this.onChange}
               value={this.state.location}

             /> *<br/><br/>

          </div>
        </div>
        );
        return (
          <div>
            {isPersonalAccount ? personalInfo : orgInfo}
            <PhoneIcon/>
            <TextField
            name="phoneNumber"
            floatingLabelText="Contact number"
            hintText="e.g. +34668552892"
            onChange={this.onChange}
            value={this.state.phoneNumber}
            />* <br /><br />
            <div className="row">
              <span>* Required fields</span>
            </div>
          </div>
        );
      case 2:
        return (
          <div>
          <p>
            We have sent a confirmation code to {this.state.phoneNumber}. Please type it below to verify your account.
          </p>
          <TextField
            name="userCode"
            floatingLabelText="Confirmation Code"
            onChange={this.onChange}
            value={this.state.userCode}
          />
          </div>
        );

    }
  }

  renderContent() {
    const {finished, stepIndex} = this.state;
    const contentStyle = {margin: '0 16px', overflow: 'hidden'};

    if (finished) {
      return (
        <div style={contentStyle}>
          <p>
          Congratulations! Your account is complete.<Link to="/dashboard">Go to your dahboard</Link>
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
          <h3>Your account has been created.<br/>We just need to set up a few things</h3>
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
