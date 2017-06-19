import React, { Component } from 'react';
import Main from '../../layouts/Main.js';
import { GridItem, SearchBar } from './components';
import { GridList, GridTile, SelectField, MenuItem } from 'material-ui';
import axios from 'axios';
import { Col, Row } from 'react-flexbox-grid';
import theme from '../../theme.js';

class Search extends Component {

constructor(props){
  super(props);

  this.state = {
    projects: [],
    filteredProjects: [],
    searchMode: false
    };
    this.onSearch = this.onSearch.bind(this);
  }

  componentWillMount(){
    axios.get('/search',{}).then(function(obj){
      return obj.data;
    }).then(json => {
      this.setState({
        projects: json
      });
    });
  };

  onSearch = (e,v, o) =>{
    var text = e.target.value.toLowerCase();
    this.setState({
      searchMode: text.length > 0
    });
    var filteredProjects = this.state.projects.filter((e) => e.title.toLowerCase().indexOf(text) !== -1);
    this.setState({
      filteredProjects: filteredProjects
    });
  }

  render() {
    const { projects, filteredProjects, searchMode } = this.state;
    const projectsToMap = searchMode ? filteredProjects : projects;

    const style = {
      search: {
        marginTop: '30px'
      }
    }

    return(
      <Main>
        <Col xs={10} xsOffset={1}>
        <Row middle="xs">
          <Col xs={8}>
            <SearchBar onChange={this.onSearch} style={style.search} />
          </Col>
          <Col xs={4}>
            <SelectField
              floatingLabelText="Filter by category"
              onChange={this.handleCategoryChange}
              >
              {theme.categories.map((cat, index) => (
                <MenuItem
                  key={index}
                  insetChildren={true}
                  value={cat}
                  primaryText={cat}
                />
              ))}
            </SelectField>
          </Col>
        </Row>
          <GridList
            cellHeight='auto'
          >
          {projectsToMap.map((project) => (
              <GridTile
                style={{padding: '16px', height: 'auto'}}
                key={project._id}
              >
                <GridItem data={project} />
              </GridTile>
            )
          )}
          </GridList>
        </Col>
      </Main>
    )
  }
}

export default Search;
