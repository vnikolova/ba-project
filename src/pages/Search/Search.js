import React, { Component } from 'react';
import Main from '../../layouts/Main.js';
import { GridItem, SearchBar } from './components';
import { GridList, GridTile, IconButton } from 'material-ui';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import axios from 'axios';

class Search extends Component {

constructor(props){
  super(props);

  this.state = {
    projects: []
    };
  }

  componentWillMount(){
    axios.get('/search',{}).then(function(obj){
      return obj.data;
    }).then(json => {
      console.log(json);
      this.setState({
        projects: json
      });
    });
  };

  render() {
    const { projects } = this.state;

    return(
      <Main>
        <SearchBar />
        <GridList
          cellHeight='auto'
        >
        {projects.map((project) => (
            <GridTile
              style={{padding: '16px', height: 'auto'}}
              key={project.img}
            >
              <GridItem title={project.title} text={project.text} />
            </GridTile>
          ))}
        </GridList>

      </Main>
    )
  }
}

export default Search;
