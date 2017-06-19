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
    searchText: "",
    filteredProjects: [],
    filterByCategory: "All",
    filterMode: false,
    searchMode: false
    };
    this.onSearch = this.onSearch.bind(this);
    this.onChangeCategory = this.onChangeCategory.bind(this);
    this.filterProjects = this.filterProjects.bind(this);
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
    this.setState({
      searchText: e.target.value.toLowerCase(),
      searchMode: e.target.value.length > 0
    });

    this.filterProjects(this.state.searchText);
  }

  onChangeCategory = (e, i,v) => {
      this.setState({
        filterByCategory: v
      });
    this.filterProjects(this.state.searchText, v);
    };

  filterProjects(text, category) {
    let { searchMode, searchText, filterByCategory } = this.state;
    let filteredProjects;

    if(category) {
      filteredProjects = this.state.projects.filter((e) => e.category == category);
    } else if((searchMode === true) && (filterByCategory !== "All")) {
      console.log("in two conditions");
      filteredProjects = this.state.projects.filter((e) =>
        (e.title.toLowerCase().indexOf(searchText) !== -1) && (e.category === filterByCategory)
      );
    }
    else {
      console.log("in else");
      filteredProjects = this.state.projects.filter((e) => e.title.toLowerCase().indexOf(searchText) !== -1);
      }

    this.setState({
      filteredProjects: filteredProjects
    });
  }

  render() {
    const { projects, filterByCategory, filteredProjects, searchMode } = this.state;
    let projectsToMap = (filterByCategory !== "All") || searchMode ? filteredProjects : projects;

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
              onChange={this.onChangeCategory}
              value={this.state.filterByCategory}
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
