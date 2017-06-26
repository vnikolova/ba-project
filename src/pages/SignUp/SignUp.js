import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {TopNav, CategoryItem} from '../../components';
import axios from 'axios';
import { Step, Stepper,StepLabel } from 'material-ui/Stepper';
import {FlatButton, RaisedButton, SelectField, MenuItem, DatePicker, AutoComplete, Chip } from 'material-ui';
import ExpandTransition from 'material-ui/internal/ExpandTransition';
import PhoneIcon from 'material-ui/svg-icons/hardware/smartphone';
import TechIcon from 'material-ui/svg-icons/hardware/laptop';
import ScienceIcon from 'material-ui/svg-icons/action/lightbulb-outline';
import MusicIcon from 'material-ui/svg-icons/av/album';
import SportsIcon from 'material-ui/svg-icons/places/pool';
import FilmIcon from 'material-ui/svg-icons/image/camera-alt';
import CommunityIcon from 'material-ui/svg-icons/image/nature-people';
import TextField from 'material-ui/TextField';
import theme from '../../theme.js';
import {Row,Col} from 'react-flexbox-grid';

class SignUp extends Component {

constructor(props){
  super(props);

  this.state = {
    userIsLoggedIn: false,
    userName: '',
    userEmail: '',
    userId: '',
    dob: '',
    phoneNumber: '',
    location: '',
    country: '',
    loading: false,
    finished: false,
    stepIndex: 0,
    confirmCode: '',
    tags: []
  };

  this.onChange = this.onChange.bind(this);
  this.onChipAdd = this.onChipAdd.bind(this);
  this.onChangeCountry = this.onChangeCountry.bind(this);
  this.onDateChange = this.onDateChange.bind(this);

};

componentDidMount(){
    axios.get('/api',this.state).then(function(obj){
      console.log(obj);
      return obj.data;
    }).then(json => {
      this.setState({
        userName: json.name,
        userEmail: json.email,
        userId: json._id
      });
    });
  };

//on input change
 onChange = (e) => {
     this.setState({
       [e.target.name]: e.target.value,
     });
   };

//on date change
onDateChange = (e, obj, i) => {
    this.setState({
      age: obj,
    });
  };

//on country change
onChangeCountry = (e, i,v) => {
    this.setState({
      country: v,
    });
  };
//add a tag
onChipAdd = () => {
  this.setState({
    tags: this.state.tags.concat(this.state.tag),
    tag: ''
  });
}
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
    // send sms to the phone number provided
    axios.post('/sendsms',{"number": phoneNumber, "code": code}).then(function(json){
      console.log(json);
    });
  };

  dummyAsync = (cb) => {
    this.setState({loading: true}, () => {
      this.asyncTimer = setTimeout(cb, 500);
    });
  };

  handleNext = () => {
    const {stepIndex,userId } = this.state;

    if(stepIndex === 1) {
      this.verifyPhoneNumber();
    } else if(stepIndex === 2) {
        const data = {
          dob: this.state.dob ,
          location: this.state.location,
          country: this.state.country,
          phoneNumber: this.state.phoneNumber,
          job: this.state.job,
          interests: this.state.tags
        }
        //save data to db
        axios.put('/api/users/update/'+userId,data);
        this.dummyAsync(() => this.setState({
          finished: true,
          verified: true
        }));
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

  //autocomplete
  handleUpdateInput = (searchText) => {
    this.setState({
      job: searchText,
    });
  };

  //autocomplete
  handleNewRequest = () => {
    this.setState({
      job: '',
    });
  };
  //delete a tag
  onDeleteTag = (key) => {
    this.chipData = this.state.tags;
    const chipToDelete = this.chipData.map((chip, index) => index).indexOf(key);
    this.chipData.splice(chipToDelete, 1);
    this.setState({chipData: this.chipData});
  };

  isActive(value){
     return 'btn '+((value === this.state.userType) ?'active':'default');
   };

  getStepContent(stepIndex) {

  const row = {
    display: 'flex',
    alignItems: 'center'
  }
    switch (stepIndex) {
      case 0:
        return (
          <div>
          <div style={row}>
            <span>I was born on &nbsp;</span>
            <DatePicker
              hintText="Date of Birth"
              container="inline"
              onChange={this.onDateChange}
              value={this.state.age}
            />
          </div>

          <div style={row}>
            <span>I come from &nbsp;</span>
            <SelectField
              hintText="Your home country"
              value={this.state.country}
              onChange={this.onChangeCountry}
            >
              {theme.countries.map((country, index) => (
                <MenuItem
                  key={index}
                  insetChildren={true}
                  value={country}
                  primaryText={country}
                />
              ))}
            </SelectField>
            </div><br/>

            <span>I live in &nbsp;</span>
            <TextField
               name="location"
               floatingLabelText="The city you live in"
               onChange={this.onChange}
               value={this.state.location}
             /><br/>

            <div style={row}>
              <span>During the day I am &nbsp;</span>
              <AutoComplete
                hintText="Your job"
                searchText={this.state.job}
                onUpdateInput={this.handleUpdateInput}
                dataSource={theme.jobs}
                filter={(searchText, key) => (key.indexOf(searchText) !== -1)}
              />
            </div><br/>

            <br/><br/>
            <PhoneIcon/>
            <TextField
            name="phoneNumber"
            floatingLabelText="Contact number"
            hintText="e.g. +34668552892"
            onChange={this.onChange}
            value={this.state.phoneNumber}
            /><br /><br />
          </div>
        );
      case 1:
          return (
            <div>
            <h2>Which categories are you interested in ?</h2>
            <Row>
                <Col xs={3}>
                  <CategoryItem size="180" color={theme.colors.science} icon={<ScienceIcon />} title="Science & Reserach"/>
                </Col>
                <Col xs={3}>
                  <CategoryItem size="180" color={theme.colors.primaryBlue} icon={<TechIcon />} title="Technology"/>
                </Col>
                <Col xs={3}>
                  <CategoryItem size="180" color={theme.colors.film} icon={<FilmIcon />} title="Film & Photography"/>
                </Col>

          </Row>
          <Row>
            <Col xs={3}>
              <CategoryItem size="180" color={theme.colors.music} icon={<MusicIcon />} title="Music"/>
            </Col>
            <Col xs={3}>
              <CategoryItem size="180" color={theme.colors.sports} icon={<SportsIcon />} title="Sports"/>
            </Col>
            <Col xs={3}>
              <CategoryItem size="180" color={theme.colors.primaryGreen} icon={<CommunityIcon />} title="Community"/>
            </Col>
          </Row>

          <h3>Missing something? Add project related tags to follow.</h3>
          <Row>
        { this.state.tags.map((tag, index) => (
            <Chip
              key={index}
              style={{margin: '4px'}}
              onRequestDelete={() => this.onDeleteTag(index)}
            >
            {tag}
          </Chip>
        ))
      }
        </Row>
          <TextField
            name="tag"
            floatingLabelText="Your interests"
            hintText="e.g. Environment"
            onChange={this.onChange}
            value={this.state.tag}
          />
          <RaisedButton
          label="Add"
          onTouchTap={this.onChipAdd}
        />
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
      case 3:
        return(
          <div>
            <p>
                Your confirmation code was wrong.<br />
                <RaisedButton
                label="Click to resend"
                onTouchTap={this.verifyPhoneNumber.bind(this)}
              /> or go back to change your number.<br /><br />
              If you do not wish to verify your account, <br />
              you can <Link to="/dashboard">Continue to your dahboard</Link>.
            </p>
          </div>
        )
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
          {stepIndex < 3 ?
            <RaisedButton
              label={stepIndex === 2 ? 'Finish' : 'Next'}
              onTouchTap={this.handleNext}
              primary={true}
            />
          :""}

        </div>
      </div>
    );
  }

  render() {
    const { userName, loading, stepIndex } = this.state;

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
            <StepLabel>Who are you?</StepLabel>
          </Step>
          <Step>
            <StepLabel>What are your interests?</StepLabel>
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
