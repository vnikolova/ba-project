import React, { Component } from 'react';
import Main from '../../layouts/Main.js';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { TextField, SelectField, MenuItem, DatePicker, RaisedButton } from 'material-ui';
import { Row, Col } from 'react-flexbox-grid';
import LocationIcon from 'material-ui/svg-icons/communication/location-on';
import theme from '../../theme.js';

class CreateProject extends Component {

constructor(props){
  super(props);

  this.state = {
    title: '',
    cause: '',
    category: '',
    description: '',
    deadline: {},
    location: '',
    funding: {
      indiegogo: '',
      kickstarter: ''
    }
  };

  this.onChange = this.onChange.bind(this);
  this.onDateChange = this.onDateChange.bind(this);
  this.onChangeFundingK = this.onChangeFundingK.bind(this);
  this.onChangeFundingI = this.onChangeFundingI.bind(this);
  this.onChangeCategory = this.onChangeCategory.bind(this);
  this.createProject = this.createProject.bind(this);
}
//on input change
 onChange = (e) => {
     this.setState({
       [e.target.name]: e.target.value,
     });
   };

//on date change
onDateChange = (e, obj) => {
    this.setState({
      deadline: obj,
    });
  };

//on country change
onChangeFundingK = (e) => {
  var funding = this.state.funding;
  funding.kickstarter = e.target.value;
  this.setState({ funding : funding });
};

onChangeFundingI = (e) => {
  var funding = this.state.funding;
  funding.indiegogo = e.target.value;
  this.setState({ funding: funding});
};

onChangeCategory = (e, i, v) => {
  this.setState({
    category: v,
  });
};

createProject() {
    axios.post('/create',this.state).then(function(obj){
      return obj.data;
    }).then(json => {
      if(json) {
        this.setState({
          finished: true
        });
      }
    });
  };

  render() {
    const iconStyle = {
      width: '30px',
      height: '30px'
    }

    return(
    <Main>
    {this.state.finished ?
      <div className="row">
        <h1>Your project has been created.</h1>
        <Link to="/dashboard">Continue to your dahboard</Link>
       </div>
    : <div>
      <Row><Col xs={4} xsOffset={2}><h1 className="middle">Create a new project</h1></Col></Row>
      <Row>
        <Col xs={4} xsOffset={2}>
          <div className="row">
            <TextField
              name="title"
              floatingLabelText="Your Project Title"
              hintText="e.g. Life in Barcelona Documentary"
              onChange={this.onChange}
              value={this.state.title}
              />
          </div>
          <div className="row">
            <TextField
              name="cause"
              floatingLabelText="Cause the project supports"
              hintText="e.g. Advocacy and human rights"
              onChange={this.onChange}
              value={this.state.cause}
               />
          </div>
          <div className="row">
            <SelectField
              value={this.state.category}
              onChange={this.onChangeCategory}
              floatingLabelText="Category"
            >
            {theme.categories.map((category, index) => (
              <MenuItem
                key={index}
                insetChildren={true}
                value={category}
                primaryText={category}
              />
            ))}
            </SelectField>
          </div>
          <div className="row">
            <TextField
              multiLine
              rows={5}
              name="description"
              floatingLabelText="Your project description"
              onChange={this.onChange}
              value={this.state.description}
            />
          </div>

          </Col>

          <Col xs={3}>
            <DatePicker
              hintText="Deadline"
              container="inline"
              onChange={this.onDateChange}
              value={this.state.deadline}
            />
            <div className="row align-base">
              <LocationIcon color={theme.colors.grey} />
              <TextField
                name="location"
                floatingLabelText="Location"
                onChange={this.onChange}
                value={this.state.location}
              />
            </div>
            <TextField
              name="roles"
              floatingLabelText="Roles available"
              hintText="e.g. Videographer, Video editor"
              onChange={this.onChange}
              value={this.state.roles}
            />
            <div className="row align-base">
              <img src="img/kickstarter.png" alt="" style={iconStyle} />&nbsp;
              <TextField
                floatingLabelText="Link to Kickstarter project"
                onChange={this.onChangeFundingK}
                value={this.state.funding.kickstarter}
              />
            </div>
            <div className="row align-base">
              <img src="img/indiegogo.png" alt="" style={iconStyle} />&nbsp;
              <TextField
                floatingLabelText="Link to Indiegogo project"
                onChange={this.onChangeFundingI}
                value={this.state.funding.indiegogo}
              />
            </div>
            <br />
            <RaisedButton
              labelColor={theme.colors.cream}
              backgroundColor={theme.colors.primaryGreen}
              label="Create"
              fullWidth
              onClick={this.createProject}
            />
          </Col>
        </Row>
        </div>}

      </Main>
    )
  }
}

export default CreateProject;
